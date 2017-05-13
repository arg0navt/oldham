import React, { Component } from 'react';
import detail from '../../css/detail'
import global from '../../css/global'
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { css } from 'aphrodite/no-important';
import { Item } from '../../ui/item'
import { Recomendation } from '../../ui/recomendation'
import { CatalogPanel } from '../../ui/catalogPanel'
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch } from 'react-axios'
import { url } from '../../config/url'
import _ from 'underscore'

class Detail extends Component{
    constructor(props){
        super(props)
        this.state = {
            id:'',
            call30:1,
            call40:1,
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            const url = this.props.location.pathname
            const urlArr = url.split('/')
            const last = _.last(urlArr)
            this.setState({
                id: last
            })
            const n = _.findLastIndex(this.props.Store.basket, (item) => { return item.item_id == last })
            if (n != -1){
                if ( this.props.Store.basket[n].width == 30 ){
                    if (this.props.Store.basket[n].call != undefined){
                        this.setState({call30:this.props.Store.basket[n].call})
                    } else {
                        this.setState({call30:1})
                    }
                } else if ( this.props.Store.basket[n].width == 40 ){
                    if (this.props.Store.basket[n].call != undefined){
                        this.setState({call40:this.props.Store.basket[n].call})
                    } else {
                        this.setState({call40:1})
                    }
                }
            }
        },100)
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
            <div className={css(detail.detailPage)}>
                <Get url={`http://dev.kaerus.ru/Pwa/getItem.json?commands=[{%22data%22:{%22itemId%22:${this.state.id},%22client_id%22:%2281dc9bdb52d04dc20036dbd8313ed055%22,%22platform%22:%221%22}}]`}>
                    {(error, response, isLoading) => {
                        if(error) {
                            return (<div></div>)
                        } else if(isLoading) {
                            return (<div></div>)
                        } else if(response !== null) {
                            const item = response.data[0].result[0]
                            return (
                                <div>
                                    <div className={css(detail.detailPich)}>
                                        <img className={css(detail.detailImg)} src={`http://dev.kaerus.ru/uploads/${item.item_image_750x480}`} alt=""/>
                                    </div>
                                    <div className={css(detail.detailText)}>
                                        <p className={css(detail.name)}>{item.item_name}</p>
                                        <p className={css(detail.description)}>
                                            <span className={css(detail.span)}>Состав</span>
                                            {item.item_description}
                                        </p>
                                    </div>
                                    <div className={css(detail.list)}>
                                        <div className={css(detail.listItem)}>
                                            <div className={css(detail.listItemLeft)}>
                                                {item.category_name == 'Пицца' ? (
                                                    <div className={css(detail.param)}>
                                                        <span className={css(detail.paramNum)}>30</span>см
                                                    </div>
                                                ) : (<div></div>)}
                                                <div className={css(detail.price)}>{item.item_price} ₽</div>
                                            </div>
                                            <div className={css(detail.listItemRight)}>
                                                {this.state.call30 > 1 ? (
                                                    <div className={css(global.uiNum)}>
                                                        <div className={css(global.minus)}></div>
                                                        <input className={css(global.input)} type="text" value={this.state.call30} />
                                                        <div className={css(global.plus)}></div>
                                                    </div>
                                                ) : (
                                                    <div></div>
                                                )}
                                                <div className={css(global.uiNum)}>
                                                    <button className={css(global.addCart)}>В корзину</button>
                                                </div>
                                            </div>
                                        </div>
                                        {item.category_name == 'Пицца' && item.item_size_m_price != null ? (
                                        <div className={css(detail.listItem)}>
                                            <div className={css(detail.listItemLeft)}>
                                                <div className={css(detail.param)}>
                                                    <span className={css(detail.paramNum)}>40</span>см
                                                </div>
                                                <div className={css(detail.price)}>{item.item_size_m_price} ₽</div>
                                            </div>
                                            <div className={css(detail.listItemRight)}>
                                                {this.state.call40 > 1 ? (
                                                    <div className={css(global.uiNum)}>
                                                        <div className={css(global.minus)}></div>
                                                        <input className={css(global.input)} type="text" value={this.state.call40} />
                                                        <div className={css(global.plus)}></div>
                                                    </div>
                                                ) : (
                                                    <div></div>
                                                )}
                                                <div className={css(global.uiNum)}>
                                                    <button className={css(global.addCart)}>В корзину</button>
                                                </div>
                                            </div>
                                        </div>
                                        ) : (<div></div>)}
                                        <div className={css(detail.addIngredient)}><p className={css(detail.addIngredientText)}><img className={css(detail.addIngredientImg)} src="/img/icon/plus.png" />Добавить ингредиенты</p></div>
                                    </div>
                                </div>
                            )
                        }
                        return (<div></div>)
                    }}
                </Get>
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
)(Detail)