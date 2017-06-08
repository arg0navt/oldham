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
            num: 0,
            width: 30,
            link:'',
            num40:0
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
    sum(){
        this.setState({num: this.state.num + 1})
        this.props.more({...this.props.item, width:30})
        this.price()
    }
    sub(){
        if(this.state.num > 1){
            this.setState({num:this.state.num - 1})
            this.props.sub({...this.props.item, width:30})
            this.price()
        } else if (this.state.num == 1){
            this.setState({num:0})
            this.props.delete({...this.props.item, width:30})
        }
    }
    sum40(){
        this.setState({num40: this.state.num40 + 1})
        this.props.more40({...this.props.item, width:40})
        this.price()
    }
    sub40(){
        if(this.state.num40 > 1){
            this.setState({num40:this.state.num40 - 1})
            this.props.sub40({...this.props.item, width:40})
            this.price()
        } else if (this.state.num40 == 1){
            this.setState({num40:0})
            this.props.delete({...this.props.item, width:40})
        }
    }
    add(){
        setTimeout(()=>{
            if (this.state.width == 30){
                this.setState({num:1})
                this.props.addBasket({...this.props.item, width:30})
            } else if (this.state.width == 40){
                this.setState({num40:1})
                this.props.addBasket({...this.props.item, width:40})
            }
        },10)
        this.price()
    }
    widthW(width){
        this.setState({width: width})
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
        const found = _.filter(this.props.Store.basket, (item) => { return item.item_id == this.props.item.item_id; })
        if (found.length != [] ){
            found.map((item, index) => {
                if (item.width == 30){
                    setTimeout(()=>{
                        this.setState({
                            num: item.call || 1,
                            width:30
                        })
                    },10)
                } else {
                    setTimeout(()=>{
                        this.setState({
                            num40: item.call || 1,
                            width:40
                        })
                    },10)
                }
            })
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
                    ) : (<div style={{display:'none'}}></div>)}
                    {this.state.num < 1 && this.state.width == 30 ? (
                        <div className={css(c.num)} ref={(start) => this.start = start}>
                        <div className={css(c.start)}>
                            <div className={css(c.price)}>{this.props.item.item_price} ₽</div>
                            <div className={css(c.plus)} onClick={this.add.bind(this)}>+</div>
                        </div>
                    </div>
                    ) : this.state.num40 < 1 && this.state.width == 40 ? (
                        <div className={css(c.num)} ref={(start) => this.start = start}>
                            <div className={css(c.start)}>
                                <div className={css(c.price)}>{parseFloat(this.props.item.item_price) + parseFloat(this.props.item.item_size_m_price)} ₽</div>
                                <div className={css(c.plus)} onClick={this.add.bind(this)}>+</div>
                            </div>
                        </div>
                    ) :(<div style={{display:'none'}}></div>)}
                    {this.state.num >= 1 && this.state.width == 30 ? (
                        <div className={css(global.uiNum, c.numItem)} ref={(numWrap) => this.numWrap = numWrap}>
                            <div onClick={this.sub.bind(this)} className={css(global.minus, c.minus)}></div>
                            <input className={css(global.input, c.input)} type="text" value={this.state.num} />
                            <div onClick={this.sum.bind(this)} className={css(global.plus, c.plus)}></div>
                        </div>
                    ) : this.state.num40 >= 1 && this.state.width == 40 ? (
                        <div className={css(global.uiNum, c.numItem)} ref={(numWrap) => this.numWrap = numWrap}>
                            <div onClick={this.sub40.bind(this)} className={css(global.minus, c.minus)}></div>
                            <input className={css(global.input, c.input)} type="text" value={this.state.num40} />
                            <div onClick={this.sum40.bind(this)} className={css(global.plus, c.plus)}></div>
                        </div>
                    ) : (<div style={{display:'none'}}></div>)}
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
    more40:(item) => {dispatch({type:'MORE40', payload:item})},
    sub40:(item) => {dispatch({type:'SUB40', payload:item})},
    price:(price) => {dispatch({type:'PRICE', payload:price})},
    delete:(item) => {dispatch({type:'DELETE', payload:item})}
  })
)(Item)


