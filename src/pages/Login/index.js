import React, {Component} from 'react';
import {css} from 'aphrodite/no-important';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {API, urlList, errorTextServer} from '../../config/url'
import axios from 'axios'
import c from '../../css/comein'
import * as ActionType from '../../config/ActionType';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorText: ''
        };

        this.logIn = this.logIn.bind(this);
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

    logIn() {
        axios.get(API('Auth', 'auth', `%22token%22:%22${this.props.Store.token}%22,%22login%22:%22${this.login.value}%22,%22password%22:%22${this.password.value}%22`))
            .then((response) => {
                if (response.data[0].error) {
                    this.error(response.data[0].error.message);
                } else if (response.data[0].result) {
                    this.props.userObj(response.data[0].result.user);
                    location.href = urlList.index;
                } else {
                    this.error(response.data[0].error.message);
                }
            })
            .catch((error) => {
                this.error(errorTextServer);
            })
    }

    render() {
        return (
            <div>
                {!Object.keys(this.props.Store.userLoyalty).length ? (
                    <div className={css(c.flexPosition, c.loginPage)}>
                        <div className={css(c.comeinCenter)}>
                            <p className={css(c.comeinText)}>Для входа на сайт введите ваш номер телефона и пароль</p>
                            <div className={css(c.form)}>
                                <input className={css(c.formInput)} type="text" placeholder="Номер телефона"
                                       ref={(login) => this.login = login}/>
                                <input className={css(c.formInput)} type="password" placeholder="Пароль"
                                       ref={(password) => this.password = password}/>
                                <button onClick={this.logIn} className={css(c.button, c.buttonLogin)}>
                                    Войти
                                </button>
                                <Link className={css(c.paswordLink)}>Забыли пароль?</Link>
                            </div>
                            <div ref={(errorBlock) => this.errorBlock = errorBlock} id="error"
                                 className={css(c.errorPopup)}>
                                <p className={css(c.errorText)}>{this.state.errorText}</p>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    userObj: (item) => {
        dispatch({type: ActionType.PUSH_USER, payload: item})
    },
    userLoyalty: (item) => {
        dispatch({type: ActionType.PUSH_USER_LOYALTY, payload: item})
    }
});

const mapStateToProps = state => ({
    Store: state
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)