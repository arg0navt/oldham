import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import { connect } from 'react-redux';
import global from '../../css/global'
import c from '../../css/catalogPage'
import {IndexRoute, IndexRedirect,Router,Route,browserHistory} from 'react-router';
import p from '../../css/payment'
import axios  from 'axios';

class Payment extends Component{
    constructor(props){
        super(props)
        this.state = {
            length:0,
            type:'type1'
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            const url = this.props.location.pathname
            const urlArr = url.split('/')
            const first = urlArr[1]
            this.setState({
                url: first
            })
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
        this.props.Store.basket.map((item, index)=>{
            basket = basket + `{"item_id": ${item.item_id},"item_size": ${item.width},"item_count": ${item.call}},`
        })
        let user = `{"name": "${this.props.Store.form.fio}","phone": "${this.props.Store.form.phone}","comment": "${this.props.Store.form.comment}","address": {"street": "${this.props.Store.form.sity}","house": "${this.props.Store.form.home}","office": "${this.props.Store.form.apartment}","comment": "${this.props.Store.form.note}"},"delivery_time": "14.05.2017 16:30","has_birthday": true,"payment_method": "${this.state.type}","need_change": "5000"`
        let resultUrl = `http://dev.kaerus.ru/Pwa/checkout.json?commands=[{"data": {"cart": [${basket}],"user": ${user},"client_id": "81dc9bdb52d04dc20036dbd8313ed055","platform": "1"}}]`
        console.log(resultUrl)
        axios.get(resultUrl)
        .then((response) => {
            browserHistory.push('/payment')
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
  dispatch =>({})
)(Payment)