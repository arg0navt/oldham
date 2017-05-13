import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import global from '../../css/global';
import nav from '../../css/navigation';
import login from '../../css/login';
import Hammer from 'react-hammerjs';

const navItem = [
    {
        name:'Личный кабинет',
        icon:'/img/icon/nav/icon-1.png',
        width:17,
        link:'/'
    },
    {
        name:'Акции',
        icon:'/img/icon/nav/icon-2.png',
        width:22,
        link:'/'
    },
    {
        name:'Гарантии',
        icon:'/img/icon/nav/icon-3.png',
        width:16,
        link:'/guarantees'
    },
    {
        name:'О доставке',
        icon:'/img/icon/nav/icon-4.png',
        width:20,
        link:'/delivery'
    },
    {
        name:'Контакты',
        icon:'/img/icon/nav/icon-5.png',
        width:21,
        link:'/contact'
    },
    {
        name:'Помощь',
        icon:'/img/icon/nav/icon-6.png',
        width:24,
        link:'/'
    },
    {
        name:'О приложении',
        icon:'/img/icon/nav/icon-7.png',
        width:21,
        link:'/'
    }
]

const Registratios = () => (
    <div className={css(login.registration)}>
        <img className={css(login.iconRegistration)} src="/img/icon/nav/avtorization.png" />
        <p className={css(login.registrationText)}>Зарегистрироваться</p>
    </div>
)

const Profile = () => (
    <div className={css(login.profile)}>
        <div className={css(login.avatarWrap)}>
            <img className={css(login.avatar)} src="/img/picher/ava.jpg" alt=""/>
        </div>
        <p className={css(login.name)}>Евгений Новиков</p>
        <p className={css(login.money)}>1 345 ₽</p>
    </div>
)

const Loginization = ({status}) => {
    if (status == false){
        return (
            <Registratios />
        )
    } else {
        return (
            <Profile />
        )
    }
}

const options = {
    touchAction:'compute',
    recognizers: {
        tap: {
            time: 600,
            threshold: 100
        }
    }
}

class Navigation extends Component{
    constructor(props){
        super(props)
        this.state = {x:0,o:1}
    }
    handleSwipe(ev){
        if(ev.deltaX < 0){
            const procent = 22
            const n = 100 - ev.distance
            const coefficient = n/procent * .1
            if (coefficient < 1){this.setState({o:coefficient})}
            this.setState({x:ev.deltaX})
        }
    }
    endSwipe(ev){
        if(ev.deltaX < -100){
            this.props.toggleNav()
            this.setState({x:0,o:1})
        } else {this.setState({x:0,o:1})}
    }
    close(){
        this.props.toggleNav()
        this.setState({x:0,o:1})
    }
    render(){
        return(
            <Hammer onPanEnd={this.endSwipe.bind(this)} onPan={this.handleSwipe.bind(this)} options={options}>
            <div>
                <div className={this.props.Store.nav == false ? css(nav.navWrap) : css([nav.navWrap, nav.activeShadow])} style={this.props.Store.nav == true ? {opacity:this.state.o} : {}} onClick={this.close.bind(this)}></div>
                <div className={this.props.Store.nav == false ? css(nav.nav) : css([nav.nav, nav.navActive])} style={this.props.Store.nav == true ? {left:this.state.x} : {}}>
                <div className={css(login.avtorization)}>
                </div>
                <ul className={css(nav.ul)}>
                    {navItem.map((item, index) => <li key={index} className={css(nav.li)}><Link to={item.link}><div className={css(nav.iconWrap)}><img className={css(nav.icon)} src={item.icon} style={{width:item.width}} /></div><p className={css(nav.liText)}>{item.name}</p></Link></li>)}
                </ul>
            </div>
            </div>
            </Hammer>
        )
    }
}
export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({
      toggleNav: () => {
          dispatch({type:'TOGGLE_NAV'})
      }
  })
)(Navigation)