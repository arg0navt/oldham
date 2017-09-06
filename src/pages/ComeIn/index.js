import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import c from '../../css/comein'

class ComeIn extends Component{
    render(){
        return(
            <div className={css(c.flexPosition)}>
                <div className={css(c.comeinCenter)}>
                    <p className={css(c.comeinText)}>Зарегистрируйтесь, чтобы получить больше баллов и совершать заказы быстрее.</p>
                    <div className={css(c.comeinButtons)}>
                        <Link to="/login" className={css(c.button, c.comeinButtonLogin)}>Войти</Link>
                        <Link to="/registration" className={css(c.button, c.comeinButtonRegistration)}>Регистрация</Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({})
)(ComeIn)