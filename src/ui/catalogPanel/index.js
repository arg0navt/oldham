import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import c from '../../css/catalogPage'
import global from '../../css/global'
import { createStore } from 'redux';
import { connect } from 'react-redux';
import {IndexRoute, IndexRedirect,Router,Route,browserHistory} from 'react-router';
import {Link} from 'react-router';
import _ from 'underscore'

class CatalogPanel extends Component {
    constructor(props){
        super(props)
        this.state = {
            url:'',
            length:0
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
    componentWillReceiveProps(nextProps){
        setTimeout(()=>{
            const url = nextProps.location.pathname
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
    render(){
        return(
            <div>
                {this.props.Store.basket.length > 0 && this.state.url == 'catalog' ? (
                    <div className={css(c.bottom)}>
                        <Link to="/basket">
                            <div className={css(c.bottomItem, c.iconKorz)}>
                                <p className={css(c.bottomTextOne)}>В корзине</p>
                                <p className={css(c.bottomTextTwo)}>
                                    <span className={css(c.bottomTextTwoSpan)}>{this.state.length}</span> позиций
                                </p>
                            </div>
                        </Link>
                        <Link to="/basket">
                            <div className={css(c.bottomItem, c.border)}>
                                <p className={css(c.bottomTextOne)}>На сумму</p>
                                <p className={css(c.bottomTextTwo)}>
                                    <span className={css(c.bottomTextTwoSpan)}>{this.props.Store.price} ₽</span>
                                </p>
                            </div>
                        </Link>
                    </div>
                ) : this.props.Store.basket.length > 0 && this.state.url == 'basket' ? (
                    <div className={css(c.bottom)}>
                        <Link to="/order" className={css(c.nextOrder)}>Продолжить</Link>
                    </div> 
                ) : (<div></div>)}
            </div>
        )
    }
}
export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({})
)(CatalogPanel)