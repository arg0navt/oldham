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
import axios  from 'axios';
import { url } from '../../config/url'
import cookie from 'react-cookies'
import _ from 'underscore'

class Detail extends Component{
    constructor(props){
        super(props)
        this.state = {
            id:'',
            num:0,
            num40:0,
            width:30,
            item:{}
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
        },100)
        setTimeout(()=>{
            axios.get(`http://dev.kaerus.ru/Pwa/getItem.json?commands=[{%22data%22:{%22itemId%22:${this.state.id},%22client_id%22:%2281dc9bdb52d04dc20036dbd8313ed055%22,%22platform%22:%221%22}}]`)
            .then((response) => {
                this.setState({item:response.data[0].result[0]})
            })
            .catch((error) => {console.log(error)})
        },110)
        setTimeout(()=>{
        const found = _.filter(this.props.Store.basket, (item) => { return item.item_id == this.state.item.item_id; })
            if (found.length != [] ){
                found.map((item, index) => {
                    if (item.width == 30){
                        setTimeout(()=>{
                            this.setState({
                                num: item.call || 1,
                            })
                        },10)
                    } else {
                        setTimeout(()=>{
                            this.setState({
                                num40: item.call || 1,
                            })
                    },10)
                }
            })
        }
        },320)
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
    sum(item){
        this.setState({num: this.state.num + 1})
        this.props.more({...item, width:30})
        this.price()
    }
    sub(item){
        if(this.state.num > 1){
            this.setState({num:this.state.num - 1})
            this.props.sub({...item, width:30})
            this.price()
        } else if (this.state.num == 1){
            this.setState({num:0})
            this.props.delete({...item, width:30})
        }
    }
    sum40(item){
        this.setState({num40: this.state.num40 + 1})
        this.props.more40({...item, width:40})
        this.price()
    }
    sub40(item){
        if(this.state.num40 > 1){
            this.setState({num40:this.state.num40 - 1})
            this.props.sub40({...item, width:40})
            this.price()
        } else if (this.state.num40 == 1){
            this.setState({num40:0})
            this.props.delete({...item, width:40})
        }
    }
    add(item, width){
        this.setState({
            width:width
        })
        setTimeout(()=>{
            if (this.state.width == 30){
                this.setState({num:1})
                this.props.addBasket({...item, width:30})
            } else if (this.state.width == 40){
                this.setState({num40:1})
                this.props.addBasket({...item, width:40})
            }
        },10)
        this.price()
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
            <div className={css(detail.detailPage)}>
                {this.state.item != {} ? (
                                <div>
                                    <div className={css(detail.detailPich)}>
                                        <img className={css(detail.detailImg)} src={`http://dev.kaerus.ru/uploads/${this.state.item.item_image_750x480}`} alt=""/>
                                    </div>
                                    <div className={css(detail.detailText)}>
                                        <p className={css(detail.name)}>{this.state.item.item_name}</p>
                                        <p className={css(detail.description)}>
                                            <span className={css(detail.span)}>Состав</span>
                                            {this.state.item.item_description}
                                        </p>
                                    </div>
                                    <div className={css(detail.list)}>
                                        <div className={css(detail.listItem)}>
                                            <div className={css(detail.listItemLeft)}>
                                                {this.state.item.category_name == 'Пицца' ? (
                                                    <div className={css(detail.param)}>
                                                        <span className={css(detail.paramNum)}>30</span>см
                                                    </div>
                                                ) : (<div></div>)}
                                                <div className={css(detail.price)}>{this.state.item.item_price} ₽</div>
                                            </div>
                                            <div className={css(detail.listItemRight)}>
                                                {this.state.num < 1 ? (
                                                    <div className={css(global.uiNum)}>
                                                        <button onClick={this.add.bind(this, this.state.item, 30)} className={css(global.addCart)}>В корзину</button>
                                                    </div>
                                                ) : this.state.num >= 1 ? (
                                                    <div className={css(global.uiNum)} ref={(numWrap) => this.numWrap = numWrap}>
                                                        <div  onClick={this.sub.bind(this, this.state.item)} className={css(global.minus)}></div>
                                                        <input className={css(global.input)} type="text" value={this.state.num} />
                                                        <div  onClick={this.sum.bind(this, this.state.item)} className={css(global.plus)}></div>
                                                    </div>
                                                ) : (<div></div>)}
                                            </div>
                                        </div>
                                        {this.state.item.category_name == 'Пицца' && this.state.item.item_size_m_price != null ? (
                                        <div className={css(detail.listItem)}>
                                            <div className={css(detail.listItemLeft)}>
                                                <div className={css(detail.param)}>
                                                    <span className={css(detail.paramNum)}>40</span>см
                                                </div>
                                                <div className={css(detail.price)}>{parseFloat(this.state.item.item_price) + parseFloat(this.state.item.item_size_m_price)} ₽</div>
                                            </div>
                                            <div className={css(detail.listItemRight)}>
                                                {this.state.num40 < 1 ? (
                                                    <div className={css(global.uiNum)}>
                                                        <button onClick={this.add.bind(this, this.state.item, 40)} className={css(global.addCart)}>В корзину</button>
                                                    </div>
                                                ) : this.state.num40 >= 1 ? (
                                                    <div className={css(global.uiNum)} ref={(numWrap) => this.numWrap = numWrap}>
                                                        <div  onClick={this.sub40.bind(this, this.state.item)} className={css(global.minus)}></div>
                                                        <input className={css(global.input)} type="text" value={this.state.num40} />
                                                        <div  onClick={this.sum40.bind(this, this.state.item)} className={css(global.plus)}></div>
                                                    </div>
                                                ) : (<div></div>)}
                                            </div>
                                        </div>
                                        ) : (<div></div>)}
                                    </div>
                                </div>
                            ) : (<div></div>)
                        }
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
    more:(item) => {dispatch({type:'MORE', payload:item})},
    sub:(item) => {dispatch({type:'SUB', payload:item})},
    more40:(item) => {dispatch({type:'MORE40', payload:item})},
    sub40:(item) => {dispatch({type:'SUB40', payload:item})},
    price:(price) => {dispatch({type:'PRICE', payload:price})},
    delete:(item) => {dispatch({type:'DELETE', payload:item})}
  })
)(Detail)