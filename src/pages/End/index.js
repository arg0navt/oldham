import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import { connect } from 'react-redux';
import e from '../../css/end'
import {Link} from 'react-router';

class End extends Component{
    render(){
        return(
            <div className={css(e.pich)}>
                <div className={css(e.text)}>
                    <p className={css(e.textP)}>Ваш заказ уже готовится. Наш менеджер в ближайшее время свяжется с Вами.</p>
                    <Link to="/" className={css(e.button)}>Продолжить</Link>
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
)(End)