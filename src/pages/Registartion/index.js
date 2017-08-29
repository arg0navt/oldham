import React, {Component} from 'react';
import {css} from 'aphrodite/no-important';
import {connect} from 'react-redux';
import {Recomendation} from '../../ui/recomendation';
import {CatalogPanel} from '../../ui/catalogPanel';
import {Link} from 'react-router';
import {url, API, errorTextServer, urlList} from '../../config/url';
import axios from 'axios';
import global from '../../css/global';
import c from '../../css/comein';
import FacebookLogin from 'react-facebook-login';;
import * as ActionType from '../../config/ActionType';
import {IndexRoute, IndexRedirect, Router, Route, browserHistory} from 'react-router';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorText: ''
        };

        this.registration = this.registration.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.Store.token && Object.keys(nextProps.Store.user).length) {
            axios.get(API('Loyalty', 'get', `%22token%22:%22${this.props.Store.token}%22`))
                .then((res) => {
                    if (res.data[0].error) {
                        this.props.userLoyalty(res.data[0].result);
                    }
                })
                .catch((er) => {
                    this.error(errorTextServer);
                })
        }
    }

    error(error) {
        this.setState({errorText: error});
        setTimeout(() => {
            this.errorBlock.style.cssText = 'visibility: visible; opacity: 1';
            setTimeout(() => {
                this.errorBlock.style.cssText = 'visibility: hidden; opacity:0';
            }, 3000);
        }, 100);
    }

    registration() {
        const parameters = `%22token%22:%22${this.props.Store.token || ''}%22,%22name%22:%22${this.name.value}%22,%22login%22:%22${this.phone.value}%22,%22password%22:%22${this.password.value}%22,%22phone%22:%22${this.phone.value}%22,%22promocode%22:%22${this.cod.value}%22`;
        axios.get(API('Auth', 'registerByToken', parameters))
            .then((response) => {
                if (response.data[0].error) {
                    this.error(response.data[0].error.message);
                } else if (response.data[0].result) {
                    axios.get(API('Auth', 'auth', `%22token%22:%22${this.props.Store.token || ''}%22,%22login%22:%22${this.phone.value}%22,%22password%22:%22${this.password.value}%22`))
                        .then((response) => {
                            this.props.userObj(response.data[0].result.user);
                            browserHistory.push(urlList.endregistration);
                        })
                        .catch((error) => {
                            this.error(errorTextServer)
                        })
                }
            })
            .catch((error) => {
                this.error(errorTextServer)
            })
    }

    render() {
        return (
            <div>
                {!Object.keys(this.props.Store.userLoyalty).length ? (
                    <div className={css(c.flexPosition, c.registrationPage)}>
                        <div className={css(c.comeinCenter, c.registrCenter)}>
                            <div className={css(c.form, c.formReg)}>
                                <input className={css(c.formInput, c.regInput)} type="text" placeholder="Имя"
                                       ref={(name) => this.name = name}/>
                                <input className={css(c.formInput, c.regInput)} type="text" placeholder="Номер телефона"
                                       ref={(phone) => this.phone = phone}/>
                                <input className={css(c.formInput, c.regInput)} type="password" placeholder="Пароль"
                                       ref={(password) => this.password = password}/>
                                <input className={css(c.formInput, c.regInput, c.inputCod)} type="text"
                                       placeholder="Код приглашения" ref={(cod) => this.cod = cod}/>
                                <button className={css(c.button, c.buttonLogin, c.buttonReg)}
                                        onClick={this.registration}>Зарегистрироваться
                                </button>
                            </div>
                        </div>
                        <div ref={(errorBlock) => this.errorBlock = errorBlock} id="error"
                             className={css(c.errorPopup)}>
                            <p className={css(c.errorText)}>{this.state.errorText}</p>
                        </div>
                    </div>
                ) : null}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    Store: state
});

const mapDispatchToProps = dispatch => ({
    userObj: (item) => {
        dispatch({type: ActionType.PUSH_USER, payload: item})
    },
    userLoyalty: (item) => {
        dispatch({type: ActionType.PUSH_USER_LOYALTY, payload: item})
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration)