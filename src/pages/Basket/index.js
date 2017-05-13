import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import { connect } from 'react-redux';
import { Recomendation } from '../../ui/recomendation'
import { CatalogPanel } from '../../ui/catalogPanel'
import basket from '../../css/basket'
import global from '../../css/global'
import ItemBasket from '../../ui/itemBasket'

class Basket extends Component{
    render(){
        return(
            <div>
            <div className={css(basket.basketPage)}>
                <div className={css(basket.code)}>
                    <input type="text" className={css(basket.codeInput)} placeholder="Пароль для участия в акции" />
                </div>
                <div className={css(basket.items)}>
                    {this.props.Store.basket.map((item, index) => {
                        return(
                            <ItemBasket key={index} item={item} />
                        )
                    })}
                    <div className={css(basket.total)}>
                        <p className={css(basket.totalTextOne)}>Итого {this.props.Store.basket.length} блюда на <span className={css(basket.totalSpan)}>{this.props.Store.price} ₽</span></p>
                        <p className={css(basket.totalTextTwo)}>Предварительная стоимость заказа<br/>без учета скидки и доставки</p>
                    </div>
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
)(Basket)