import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import { connect } from 'react-redux';
import { Recomendation } from '../../ui/recomendation'
import { CatalogPanel } from '../../ui/catalogPanel'
import {Link} from 'react-router';
import { url, API } from '../../config/url'
import axios  from 'axios'
import global from '../../css/global'
import c from '../../css/comein'
import cookie from 'react-cookies'
import FacebookLogin from 'react-facebook-login';
import {IndexRoute, IndexRedirect,Router,Route,browserHistory} from 'react-router';

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            error:''
        }
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
            console.log(API('Auth', 'authByVK', `%22token%22:%22${this.props.Store.token}%22,%22access_token%22:%22${token}%22,%22redirect_uri%22:%22${url.appDomen}%22`))
            axios.get(API('Auth', 'authByVK', `%22token%22:%22${this.props.Store.token}%22,%22access_token%22:%22${token}%22,%22redirect_uri%22:%22${url.appDomen}%22`))
            .then((response)=>{
                if (response.data[0].error != undefined){
                    this.error(response.data[0].error.message)
                } else if (response.data[0].result != undefined){
                     this.props.userObj(response.data[0].result.user)
                     location.href = "/"
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
        axios.get(API('Auth', 'authByFB', `%22token%22:%22${this.props.Store.token}%22,%22access_token%22:%22${res.accessToken}%22`))
            .then((response)=>{
                if (response.data[0].error != undefined){
                    this.error(response.data[0].error.message)
                } else if (response.data[0].result != undefined){
                     this.props.userObj(response.data[0].result.user)
                     location.href = "/"
                } else {
                    this.error(response.data[0].error.message)
                }
            })
            .catch((error) => {
                this.error('Ошибка от сервера')
            })
    }
    loginn(){
        axios.get(API('Auth','auth',`%22token%22:%22${this.props.Store.token}%22,%22login%22:%22${this.login.value}%22,%22password%22:%22${this.password.value}%22`))
        .then((response)=>{
            if (response.data[0].error != undefined){
                this.error(response.data[0].error.message)
            } else if (response.data[0].result != undefined){
                this.props.userObj(response.data[0].result.user)
                location.href = "/"
            } else {
                this.error(response.data[0].error.message)
            }
        })
        .catch((error) => { this.error('Ошибка от сервера') })
    }
    render(){
        return(
            <div>
            {Object.keys(this.props.Store.userLoyalty).length == 0 ? (
            <div className={css(c.flexPosition, c.loginPage)}>
                <div className={css(c.comeinCenter)}>
                    <p className={css(c.comeinText)}>Для входа на сайт введите ваш номер телефона и пароль</p>
                    <div className={css(c.form)}>
                        <input className={css(c.formInput)} type="text" placeholder="Номер телефона" ref={(login) => this.login = login}/>
                        <input className={css(c.formInput)} type="password" placeholder="Пароль" ref={(password) => this.password = password}/>
                        <button onClick={this.loginn.bind(this)} className={css(c.button, c.buttonLogin)}>Войти</button>
                        <Link className={css(c.paswordLink)}>Забыли пароль?</Link>
                    </div>
                    <div className={css(c.social)}>
                        <a href={`https://oauth.vk.com/authorize?client_id=${url.apiIdVk}&display=mobile&redirect_uri=${url.appDomen}&scope=offline&response_type=token&v=5.64&response_type=code`} className={css(c.button, c.vk)}>войти через ВКонтакте</a>
                        <FacebookLogin redirectUri={`${url.appDomen}`} appId="582162888575359" autoLoad={false} fields="name,email,picture" callback={this.responseFacebook.bind(this)} />
                    </div>
                    <div id="error" className={css(c.errorPopup)}>
                        <p className={css(c.errorText)}>{this.state.error}</p>
                    </div>
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
)(Login)