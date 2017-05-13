import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite/no-important';
import basket from '../../css/basket'
import global from '../../css/global'
import _ from 'underscore'

class ItemBasket extends Component{
    constructor(props){
        super(props)
        this.state = {
            num: 0
        }
    }
    componentDidMount(){
        if (this.props.item.call != undefined){
            this.setState({
                num: this.props.item.call
            })
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
                        price = price + parseFloat(item.item_size_m_price) * parseFloat(item.call)
                    } else {
                        price = price + parseFloat(item.item_size_m_price)
                    } 
                }
            })
            this.props.price(price)
        },10)
    }
    sum(){
        this.setState({num: this.state.num + 1})
        this.props.more(this.props.item)
        this.price()
    }
    sub(){
        if(this.state.num > 1){this.setState({num:this.state.num - 1})}
        this.props.sub(this.props.item)
        this.price()
    }
    render(){
        return(
            <div className={css(basket.item)}>
                <div className={css(basket.itemTop)}>
                    <div className={css(basket.itemTopLeft)}>
                        <p className={css(basket.type)}>{this.props.item.category_name}</p>
                        <p className={css(basket.name)}>{this.props.item.item_name}</p>
                    </div>
                    <div className={css(basket.itemTopRight)}>
                        <div className={css(global.uiNum, basket.uiNum)}>
                            <div className={css(global.minus)} onClick={this.sub.bind(this)}></div>
                            <input className={css(global.input)} type="text" value={this.state.num} />
                            <div className={css(global.plus)} onClick={this.sum.bind(this)}></div>
                        </div>
                    </div>
                </div>
                <p className={css(basket.summ)}>{
                    this.props.item.width == 30 && this.props.item.call == undefined ? `${this.props.item.item_price}` : 
                    this.props.item.width == 40 && this.props.item.call == undefined ? `${this.props.item.item_size_m_price}` :
                    this.props.item.width == 30 && this.props.item.call != undefined ? `${this.props.item.item_price} x ${this.props.item.call} = ${parseFloat(this.props.item.item_price) * parseFloat(this.props.item.call)}` :
                    this.props.item.width == 40 && this.props.item.call != undefined ? `${this.props.item.item_size_m_price} x ${this.props.item.call} = ${parseFloat(this.props.item.item_size_m_price) * parseFloat(this.props.item.call)}` :
                    '' }
                </p>
            </div>      
        )
    }
}

export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({
    more:(item) => {dispatch({type:'MORE', payload:item})},
    sub:(item) => {dispatch({type:'SUB', payload:item})},
    price:(price) => {dispatch({type:'PRICE', payload:price})}
  })
)(ItemBasket)