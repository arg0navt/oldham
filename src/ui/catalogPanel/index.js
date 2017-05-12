import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import c from '../../css/catalogPage'
import global from '../../css/global'
import { connect } from 'react-redux';
import {Link} from 'react-router';

class CatalogPanel extends Component {
    render(){
        return(
            <div>
                {this.props.Store.basket.length > 0 ? (
                    <div className={css(c.bottom)}>
                        <Link to="/basket">
                            <div className={css(c.bottomItem, c.iconKorz)}>
                                <p className={css(c.bottomTextOne)}>В корзине</p>
                                <p className={css(c.bottomTextTwo)}>
                                    <span className={css(c.bottomTextTwoSpan)}>{this.props.Store.basket.length}</span> позиций
                                </p>
                            </div>
                        </Link>
                        <Link to="/basket">
                            <div className={css(c.bottomItem, c.border)}>
                                <p className={css(c.bottomTextOne)}>На сумму</p>
                                <p className={css(c.bottomTextTwo)}>
                                    <span className={css(c.bottomTextTwoSpan)}>{this.props.Store.price} ₽</span>
                                </p>
                            </div>
                        </Link>
                        <div className={css(c.bottomItem, c.iconUp)}>
                            <p className={css(c.bottomTextOne)}>Добавим</p>
                            <p className={css(c.bottomTextTwo)}>
                                <span className={css(c.bottomTextTwoSpan)}>30</span> баллов
                            </p>
                        </div>
                    </div>
                ) : (<div></div>)}
            </div>
        )
    }
}
export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({})
)(CatalogPanel)