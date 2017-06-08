import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import { connect } from 'react-redux';
import { Recomendation } from '../../ui/recomendation'
import { CatalogPanel } from '../../ui/catalogPanel'
import basket from '../../css/basket'
import global from '../../css/global'
import cookie from 'react-cookies' 
import ItemBasket from '../../ui/itemBasket'

class Basket extends Component{
    constructor(props){
        super(props)
        this.state = {
            length:0
        }
    }
    price(){
        let price = 0
        setTimeout(()=>{
            this.props.Store.basket.map((item, index) => {
                if (item.width == 30){
                    if (item.call != undefined){
                        price = price + parseFloat(item.item_price) * parseFloat(item.call)
                    } else {
                        price = price + parseFloat(item.item_price)
                    }
                } else if (item.width == 40){
                    if (item.call != undefined){
                        price = price + (parseFloat(item.item_price) + parseFloat(item.item_size_m_price)) * parseFloat(item.call)
                    } else {
                        price = price + parseFloat(item.item_price) + parseFloat(item.item_size_m_price)
                    } 
                }
            })
            this.props.price(price)
        },10)
    }
    componentDidMount(){
        setTimeout(()=>{
            let n = 0;
            this.props.Store.basket.map((item, index) => {
                if (item.call == undefined){
                    n = parseFloat(n) + 1
                } else {
                    n = parseFloat(n) + parseFloat(item.call)
                }
            })
            this.setState({length:n})
        },10)
    }
    componentWillReceiveProps(nextProps){
        setTimeout(()=>{
            let n = 0;
            nextProps.Store.basket.map((item, index) => {
                if (item.call == undefined){
                    n = parseFloat(n) + 1
                } else {
                    n = parseFloat(n) + parseFloat(item.call)
                }
            })
            this.setState({length:n})
            let price = 0
            nextProps.Store.basket.map((item, index) => {
                if (item.width == 30){
                    if (item.call != undefined){
                        price = price + parseFloat(item.item_price) * parseFloat(item.call)
                    } else {
                        price = price + parseFloat(item.item_price)
                    }
                } else if (item.width == 40){
                    if (item.call != undefined){
                        price = price + (parseFloat(item.item_price) + parseFloat(item.item_size_m_price)) * parseFloat(item.call)
                    } else {
                        price = price + parseFloat(item.item_price) + parseFloat(item.item_size_m_price)
                    } 
                }
            })
            nextProps.price(price)
        },10)
    }
    componentWillMount(){
        if(cookie.load('basket') != undefined){
            if (cookie.load('basket').length != 0 && this.props.Store.basket.length == 0){
                cookie.load('basket').map((item, index) => {
                    this.props.addBasket(item)
                })
                this.price()
            }
        }
    }
    render(){
        return(
            <div>
            {this.state.length != 0 ? (
                <div className={css(basket.basketPage)}>
                <div className={css(basket.items)}>
                    {this.props.Store.basket.map((item, index) => {
                        return(
                            <ItemBasket key={index} item={item} />
                        )
                    })}
                    <div className={css(basket.total)}>
                        <p className={css(basket.totalTextOne)}>Итого {this.state.length} блюда на <span className={css(basket.totalSpan)}>{this.props.Store.price != 0 ? this.props.Store.price : '0'} ₽</span></p>
                        <p className={css(basket.totalTextTwo)}>Предварительная стоимость заказа<br/>без учета скидки и доставки</p>
                    </div>
                </div>
                </div>
            ) : (
                <div style={{textAlign:'center', color:'#fff'}}>Корзина пуста</div>
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
    addBasket: (item) => {dispatch({type:'ADD_BASKET', payload:item})},
    price:(price) => {dispatch({type:'PRICE', payload:price})}
  })
)(Basket)