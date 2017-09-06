import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import { connect } from 'react-redux';
import e from '../../css/end'

class EndRegistration extends Component{
    go(){
        location.href = "/"
    }
    render(){
        return(
            <div className={css(e.pich)}>
                <div className={css(e.text)}>
                    <p className={css(e.textP)}>Регистрация прошла успешно</p>
                    <a onClick={this.go.bind(this)} className={css(e.button)}>Продолжить</a>
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
)(EndRegistration)