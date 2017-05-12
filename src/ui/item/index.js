import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite/no-important';
import c from '../../css/catalogPage'
import global from '../../css/global'
import {Link} from 'react-router';

class Item extends Component{
    constructor(props){
        super(props)
        this.state = {num: 1,width: 30}
    }
    sum(){
        this.setState({num: this.state.num + 1})
    }
    sub(){
        if(this.state.num > 1){this.setState({num:this.state.num - 1})}
    }
    add(){
        this.props.addBasket(this.props.item)
        this.props.addPrice(this.props.price)
        this.start.style.cssText = 'display:none'
        this.numWrap.style.cssText = 'display:block'
    }
    widthW(width){
        this.setState({width: width})
    }
    render(){
        return(
            <div className={css(c.item)}>
                <div className={css(c.itemPich)}>
                    <div className={css(c.statusWr)}></div>
                    <div className={css(c.itemImgWr)}>
                        <Link><img className={css(c.img)} src={`http://dev.kaerus.ru/uploads/${this.props.imageM}`}/></Link>
                    </div>
                </div>
                <div className={css(c.itemText)}>
                    <p className={css(c.name)}>{this.props.name}</p>
                    <p className={css(c.descroption)}>{this.props.description}</p>
                    {this.props.category == 'Пицца' ? (
                        <div className={css(c.width)}>
                            <div onClick={this.widthW.bind(this, 30)} className={this.state.width == 30 ? css(c.widthItem, c.widthItemActive) : css(c.widthItem)}>30 см</div>
                            <div onClick={this.widthW.bind(this, 40)} className={this.state.width == 40 ? css(c.widthItem, c.widthItemActive) : css(c.widthItem)}>40 см</div>
                        </div>
                    ) : (<div></div>)}
                    <div className={css(c.num)} ref={(start) => this.start = start}>
                        <div className={css(c.start)}>
                            <div className={css(c.price)}>{this.props.price} ₽</div>
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
    addPrice: (price) => {dispatch({type:'PRICE', payload:parseFloat(price)})}
  })
)(Item)


