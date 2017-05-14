import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite/no-important';
import c from '../../css/catalogPage'
import global from '../../css/global'
import {Link} from 'react-router';
import cookie from 'react-cookies'
import _ from 'underscore'

class Item extends Component{
    constructor(props){
        super(props)
        this.state = {
            num: 1,
            width: 30,
            link:''
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
        if(this.state.num > 1){
            this.setState({num:this.state.num - 1})
            this.props.sub(this.props.item)
            this.price()
        }
    }
    add(){
        this.props.addBasket(this.props.item)
        setTimeout(()=>{
            if (this.state.width == 30){
                this.props.width30(this.props.item)
            } else if (this.state.width == 40){
                this.props.width40(this.props.item)
            }
        },10)
        this.price()
        this.start.style.cssText = 'display:none'
        this.numWrap.style.cssText = 'display:block'
    }
    widthW(width){
        this.setState({width: width})
        const n = _.findLastIndex(this.props.Store.basket, (item) => { return item.item_id == this.props.item.item_id })
        if ( n != -1 ){
            setTimeout(()=>{
                if (this.state.width == 30){
                    this.props.width30(this.props.item)
                } else if (this.state.width == 40){
                    this.props.width40(this.props.item)
                }
                this.price()
            },10)    
        } 
    }
    componentDidMount(){
        if (this.props.item.category_name == 'Пицца'){
            this.setState({link:'pizza'})
        } else if (this.props.item.category_name == 'Суши и роллы'){
            this.setState({link:'sushi'})
        } else if (this.props.item.category_name == 'Вок'){
            this.setState({link:'wok'})
        } else if (this.props.item.category_name == 'Паста'){
            this.setState({link:'pasta'})
        } else if (this.props.item.category_name == 'Напитки'){
            this.setState({link:'beverages'})
        } else if (this.props.item.category_name == 'Закуски'){
            this.setState({link:'snacks'})
        } else if (this.props.item.category_name == 'Салаты'){
            this.setState({link:'salad'})
        } else if (this.props.item.category_name == 'Десерты'){
            this.setState({link:'dessert'})
        } else if (this.props.item.category_name == 'Супы'){
            this.setState({link:'sup'})
        }
    }
    render(){
        return(
            <div className={css(c.item)}>
                <div className={css(c.itemPich)}>
                    <div className={css(c.statusWr)}></div>
                    <div className={css(c.itemImgWr)}>
                        <Link to={`/catalog/${this.state.link}/${this.props.item.item_id}`}><img className={css(c.img)} src={`http://dev.kaerus.ru/uploads/${this.props.imageM}`}/></Link>
                    </div>
                </div>
                <div className={css(c.itemText)}>
                    <Link to={`/catalog/${this.state.link}/${this.props.item.item_id}`}>
                    <p className={css(c.name)}>{this.props.name}</p>
                    <p className={css(c.descroption)}>{this.props.description}</p>
                    </Link>
                    {this.props.category == 'Пицца' && this.props.item.item_size_m_price != null ? (
                        <div className={css(c.width)}>
                            <div onClick={this.widthW.bind(this, 30)} className={this.state.width == 30 ? css(c.widthItem, c.widthItemActive) : css(c.widthItem)}>30 см</div>
                            <div onClick={this.widthW.bind(this, 40)} className={this.state.width == 40 ? css(c.widthItem, c.widthItemActive) : css(c.widthItem)}>40 см</div>
                        </div>
                    ) : (<div></div>)}
                    <div className={css(c.num)} ref={(start) => this.start = start}>
                        <div className={css(c.start)}>
                            <div className={css(c.price)}>{this.state.width == 30 ? this.props.item.item_price : this.props.item.item_size_m_price} ₽</div>
                            <div className={css(c.plus)} onClick={this.add.bind(this)}>+</div>
                        </div>
                    </div>
                    <div className={css(global.uiNum, c.numItem)} ref={(numWrap) => this.numWrap = numWrap}>
                        <div onClick={this.sub.bind(this)} className={css(global.minus, c.minus)}></div>
                        <input className={css(global.input, c.input)} type="text" value={this.state.num} />
                        <div onClick={this.sum.bind(this)} className={css(global.plus, c.plus)}></div>
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
    more:(item) => {dispatch({type:'MORE', payload:item})},
    sub:(item) => {dispatch({type:'SUB', payload:item})},
    width30:(item) => {dispatch({type:'WIDTH30', payload:item})},
    width40:(item) => {dispatch({type:'WIDTH40', payload:item})},
    price:(price) => {dispatch({type:'PRICE', payload:price})}
  })
)(Item)


