import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import { connect } from 'react-redux';
import global from '../../css/global'
import c from '../../css/catalogPage'
import {IndexRoute, IndexRedirect,Router,Route,browserHistory} from 'react-router';
import p from '../../css/payment'
import axios  from 'axios';
import cookie from 'react-cookies' 

class Payment extends Component{
    constructor(props){
        super(props)
        this.state = {
            length:0,
            type:'type1'
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
        if(cookie.load('basket') != undefined){
            if (cookie.load('basket').length != 0 && this.props.Store.basket.length == 0){
                cookie.load('basket').map((item, index) => {
                    this.props.addBasket(item)
                })
                this.price()
            }
        }
        if(cookie.load('form') != undefined){
            if (this.props.Store.form.fio == undefined){
                this.props.form(cookie.load('form'))
            }
        }
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
    type(type){
        this.setState({
            type:type
        })
    }
    end(){
        let basket = ''
        const l = this.props.Store.basket.length - 1
        this.props.Store.basket.map((item, index)=>{
            if (index != l) {
                basket = basket + `{"item_id":${item.item_id},"item_size":"${item.width}","item_count":${item.call == undefined ? '1' : item.call}},`
            } else if (index == l) {
                basket = basket + `{"item_id":${item.item_id},"item_size":"${item.width}","item_count":${item.call == undefined ? '1' : item.call}}`
            }
        })
        let user = `{"name":"${this.props.Store.form.fio}","phone":"${this.props.Store.form.phone}","comment":"${this.props.Store.form.comment}","address":{"street":"${this.props.Store.form.sity}","house":"${this.props.Store.form.home}","office":"${this.props.Store.form.apartment}","comment":"${this.props.Store.form.note}"},"delivery_time":"${this.props.Store.form.time}","has_birthday":${this.props.Store.form.dr},"payment_method":"${this.state.type == 'type1' ? 'cash' : 'card'}","need_change":"5000"}`
        let resultUrl = `http://dev.kaerus.ru/Pwa/checkout.json?commands=[{"data":{"cart":[${basket}],"user":${user},"client_id":"81dc9bdb52d04dc20036dbd8313ed055","platform":"6"}}]`
        console.log(resultUrl)
        axios.get(resultUrl)
        .then((response) => {
            browserHistory.push('/end')
        })
        .catch((error) => {console.log(error)})
    }
    render(){
        return(
            <div className={css(p.page)} >
                <div className={css(p.top)}>
                    <p className={css(p.topItem)}>
                        <span className={css(p.span)}>ФИО</span>
                        {this.props.Store.form.fio}
                    </p>
                    <p className={css(p.topItem)}>
                        <span className={css(p.span)}>Телефон</span>
                        {this.props.Store.form.phone}
                    </p>
                    <p className={css(p.topItem)}>
                        <span className={css(p.span)}>Сумма заказа</span>
                        {this.state.length} блюда на {this.props.Store.price} ₽
                    </p>
                    <p className={css(p.topItem)}>
                        <span className={css(p.span)}>Адрес</span>
                        ул. {this.props.Store.form.sity}, д. {this.props.Store.form.home}, кв {this.props.Store.form.apartment}
                    </p>
                    <p className={css(p.topItem)}>
                        <span className={css(p.span)}>Доставка</span>
                        Время доставки Вашего заказа уточнит оператор в момент оформления заказа<br/><br/>Стоимость - бесплатно
                    </p>
                </div>
                <div className={css(p.priceBlock)}>
                    <p className={css(p.priceText)}>
                        Итого со скидкой и доставкой <span className={css(p.priceSpan)}>{this.props.Store.price} ₽</span>
                    </p>
                </div>
                <div className={css(p.type)}>
                    <p className={css(p.typeTitle)}>Способ оплаты</p>
                    <div className={css(p.typeWr)}>
                        <div className={css(p.typeItem)} onClick={this.type.bind(this, 'type1')}>
                            <div className={this.state.type == 'type1' ? css(p.typeImg1, p.typeImg1Active) : css(p.typeImg1)}></div>
                            <p className={this.state.type == 'type1' ? css(p.itemType, p.itemTypeActive) : css(p.itemType)}>Наличные курьеру</p>
                        </div>
                        <div className={css(p.typeItem)} onClick={this.type.bind(this, 'type2')}>
                            <div className={this.state.type == 'type2' ? css(p.typeImg2, p.typeImg2Active) : css(p.typeImg2)}></div>
                            <p className={this.state.type == 'type2' ? css(p.itemType, p.itemTypeActive) : css(p.itemType)}>Картой курьеру</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={css(c.bottom)}>
                        <a className={css(c.nextOrder)} onClick={this.end.bind(this)}>Оформить заказ</a>
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
  dispatch =>({
    addBasket: (item) => {dispatch({type:'ADD_BASKET', payload:item})},
    price:(price) => {dispatch({type:'PRICE', payload:price})},
    form:(form) => {dispatch({type:'FORM', payload:form})}
  })
)(Payment)