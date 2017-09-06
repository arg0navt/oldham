import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import c from '../../css/catalogPage'
import global from '../../css/global'
import { createStore } from 'redux';
import { connect } from 'react-redux';
import {IndexRoute, IndexRedirect,Router,Route,browserHistory} from 'react-router';
import {Link} from 'react-router';
import _ from 'underscore'

class CatalogPanel extends Component {
    goOrder(){
        browserHistory.push('/order');
        window.scrollTo(0,0);
    }

    render(){
        let price = 0;
        this.props.Store.basket.map((item, index) => {
           price+=item.price;
        });
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
                                    <span className={css(c.bottomTextTwoSpan)}>{price} ₽</span>
                                </p>
                            </div>
                        </Link>
                    </div>
                ) : this.props.Store.basket.length > 0 && this.state.url === 'basket' ? (
                    <div className={css(c.bottom)}>
                        <Link onClick={this.goOrder.bind(this)} className={css(c.nextOrder)}>Продолжить</Link>
                    </div> 
                ) : null}
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