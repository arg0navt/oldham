import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import { connect } from 'react-redux';
import { Recomendation } from '../../ui/recomendation'
import { CatalogPanel } from '../../ui/catalogPanel'
import {Link} from 'react-router'
import { url, API } from '../../config/url'
import axios  from 'axios'
import global from '../../css/global'
import c from '../../css/comein'
import cookie from 'react-cookies'
import FacebookLogin from 'react-facebook-login';
import {IndexRoute, IndexRedirect,Router,Route,browserHistory} from 'react-router';

class Registration extends Component{
    constructor(props){
        super(props)
        this.state = {
            errorText:''
        }
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.Store.token != '' && Object.keys(nextProps.Store.user).length != 0){
            axios.get(API('Loyalty','get', `%22token%22:%22${this.props.Store.token}%22`))
            .then((res) => {
                console.log(res)
                if (res.data[0].error != undefined){
                    this.props.userLoyalty(res.data[0].result)
                }
            })
            .catch((er) => { this.error('Ошибка от сервера') })
        }
    }
    registration(){
        axios.get(API('Auth','registerByToken',`%22token%22:%22${this.props.Store.token || ''}%22,%22name%22:%22${this.name.value}%22,%22login%22:%22${this.phone.value}%22,%22password%22:%22${this.password.value}%22,%22phone%22:%22${this.phone.value}%22,%22promocode%22:%22${this.cod.value}%22`))
        .then((response) => {
            if (response.data[0].error != undefined){
                this.setState({error: response.data[0].error.message})
                document.getElementById('error').style.cssText = 'display:block'
                setTimeout(()=>{
                    document.getElementById('error').style.cssText = 'display:block;opacity:0'
                    setTimeout(()=>{
                        document.getElementById('error').style.cssText = 'display:none'
                    },200)
                },500)
            } else if (response.data[0].result != undefined){
                axios.get(API('Auth','auth',`%22token%22:%22${this.props.Store.token || ''}%22,%22login%22:%22${this.phone.value}%22,%22password%22:%22${this.password.value}%22`))
                .then((response) => {
                    this.props.userObj(response.data[0].result.user)
                    browserHistory.push('/endregistration')
                })
                .catch((error) => { this.error('Ошибка от сервера') })
            }
        })
        .catch((error) => { this.error('Ошибка от сервера') })
    }
    error(error){
        this.setState({error: error})
        document.getElementById('error').style.cssText = 'display:block'
        setTimeout(()=>{
            document.getElementById('error').style.cssText = 'display:block;opacity:1'
        },500)
        setTimeout(()=>{
            document.getElementById('error').style.cssText = 'display:none;opacity:0'
        },4000)
    }
    componentDidMount(){
        setTimeout(()=>{
            if (Object.keys(this.props.Store.userLoyalty).length == 0){
            if (this.props.Store.routing.locationBeforeTransitions.query.code != undefined){
                const token = this.props.Store.routing.locationBeforeTransitions.query.code
                if (token.length < 120){
                axios.get(API('Auth', 'authByVK', `%22token%22:%22${this.props.Store.token}%22,%22access_token%22:%22${token}%22,%22redirect_uri%22:%22$http://localhost:3000/registration%22`))
                .then((response)=>{
                    console.log(response)
                    if (response.data[0].error != undefined){
                        this.error(response.data[0].error.message)
                    } else if (response.data[0].result != undefined){
                        this.props.userObj(response.data[0].result.user)
                        browserHistory.push('/endregistration')
                    } else {
                        this.error(response.data[0].error.message)
                    }
                })
                .catch((error) => {
                    this.error('Ошибка от сервера')
                })
            }
        }
    } else {
        browserHistory.push('/')
    }
    },500)
    }
    responseFacebook(res){
        setTimeout(()=>{
            axios.get(API('Auth', 'authByFB', `%22token%22:%22${this.props.Store.token}%22,%22access_token%22:%22${res.accessToken}%22`))
            .then((response)=>{
                if (response.data[0].error != undefined){
                    this.error(response.data[0].error.message)
                } else if (response.data[0].result != undefined){
                     this.props.userObj(response.data[0].result.user)
                     browserHistory.push('/endregistration')
                } else {
                    this.error(response.data[0].error.message)
                }
            })
            .catch((error) => {
                this.error('Ошибка от сервера')
            })
        },200)    
    }
    render(){
        return(
        <div>
            {Object.keys(this.props.Store.userLoyalty).length == 0 ? (
                <div className={css(c.flexPosition, c.registrationPage)}>
                <div className={css(c.comeinCenter, c.registrCenter)}>
                    <div className={css(c.form, c.formReg)}>
                        <input className={css(c.formInput, c.regInput)} type="text" placeholder="Имя" ref={(name) => this.name = name}/>
                        <input className={css(c.formInput, c.regInput)} type="text" placeholder="Номер телефона" ref={(phone) => this.phone = phone}/>
                        <input className={css(c.formInput, c.regInput)} type="password" placeholder="Пароль" ref={(password) => this.password = password}/>
                        <input className={css(c.formInput, c.regInput, c.inputCod)} type="text" placeholder="Код приглашения" ref={(cod) => this.cod = cod}/>
                        <button className={css(c.button, c.buttonLogin, c.buttonReg)} onClick={this.registration.bind(this)}>Зарегистрироваться</button>
                    </div>
                    <div className={css(c.social)}>
                        <a href={`https://oauth.vk.com/authorize?client_id=${url.apiIdVk}&display=mobile&redirect_uri=http://argonavtt-ru.1gb.ru/registration&scope=offline&response_type=token&v=5.64&response_type=code`} className={css(c.button, c.vk)}>войти через ВКонтакте</a>
                        <FacebookLogin redirectUri={`http://argonavtt-ru.1gb.ru/registration`}  appId="582162888575359" autoLoad={false} fields="name,email,picture" callback={this.responseFacebook.bind(this)} />
                    </div>
                </div>
                <div id="error" className={css(c.errorPopup)}>
                    <p className={css(c.errorText)}>{this.state.error}</p>
                </div>
             </div>
            ) : (
                <div></div>
            )}
        </div>
        )
    }
}

export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({
      userObj: (item) => {dispatch({type:'PUSH_USER', payload:item})},
      userLoyalty: (item) => {dispatch({type:'PUSH_USER_LOYALTY', payload:item})}
  })
)(Registration)