import React, { Component } from 'react';
import {Link} from 'react-router';
import { css } from 'aphrodite/no-important';
import c from '../../css/catalogPage'
import global from '../../css/global'
import _ from 'underscore'
import Hammer from 'react-hammerjs';
import Item from '../../ui/item'
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch } from 'react-axios'
import { url } from '../../config/url' 

const options = {
    touchAction:'compute',
    recognizers: {
        tap: {
            time: 600,
            threshold: 100
        }
    }
}

export default class Catalog extends Component{
    constructor(props){
        super(props)
        this.state = {
            marginTab:0,
            x:145,
            l:0,
            n:0
        }
        this.newState = this.newState.bind(this)
    }
    marginState(){
        let heightItem = document.querySelectorAll('.tabLink')[this.state.n].clientWidth
        document.querySelectorAll('.tabLink').forEach((element, index) => {
            if (index != this.state.n){
                element.classList.remove("tabLinkActive")
            } else {
                element.classList.add("tabLinkActive")
            }
        })
        setTimeout(()=>{
            document.querySelector('.tabLinkActive').offsetLeft
        },10)
        this.setState({
            x: -(window.innerWidth * this.state.n),
            marginTab: window.innerWidth/2 - document.querySelector('.tabLinkActive').offsetLeft - heightItem/2
        })
    }
    newState(operator){
        if(operator == 'sum'){
            this.setState({ n: this.state.n + 1 })
        } else if (operator == 'sub'){
            this.setState({ n: this.state.n - 1 })
        }
        setTimeout(()=>{
            this.marginState()
        },10)
    }
    componentDidMount(){
        if (_.contains(this.props.routes[1].childRoutes, this.props.routes[2])){
            const n = _.indexOf(this.props.routes[1].childRoutes, this.props.routes[2])
            setTimeout(()=>{
                this.setState({
                    n:n,
                })
            },10)
        }
        setTimeout(()=>{
            this.setState({
                x: -(window.innerWidth * this.state.n),
                l:this.props.routes[1].childRoutes.length,
            })
        },10)
        setTimeout(()=>{
            let heightItem = document.querySelectorAll('.tabLink')[this.state.n].clientWidth
        document.querySelectorAll('.tabLink').forEach((element, index) => {
            if (index != this.state.n){
                element.classList.remove("tabLinkActive")
            } else {
                element.classList.add("tabLinkActive")
            }
        })
        setTimeout(()=>{
            document.querySelector('.tabLinkActive').offsetLeft
        },10)
        this.setState({
            x: -(window.innerWidth * this.state.n),
            marginTab: window.innerWidth/2 - document.querySelector('.tabLinkActive').offsetLeft - heightItem/2
        })
        },500)
    }
    listSwipe(ev){
        if(ev.deltaX < 0){
            if (-(this.state.x) < window.innerWidth * this.state.l){
                if (this.state.n != this.state.l){
                    this.newState('sum')
                }
            }
        } else if (ev.deltaX > 0){
            if (this.state.x != 0){
                this.newState('sub')
            }
        }
    }
    golink(n){
        this.setState({
             n: n
        })
        setTimeout(()=>{
            this.marginState()
        },10)
    }
    render(){
        const children = this.props.children;
        return (
            <div className={css(global.catalog)}>
                <div className={css(c.tabBlock)}>
                    <div className={css(c.tabWr)}>
                        <div className={css(c.tabItem)} style={{transform: 'translate3d('+ this.state.marginTab + 'px, 0px, 0px)'}}>
                            <Get url={`${url.url}?commands=[{%22data%22:{%22client_id%22:%22${url.userId}%22,%22platform%22:%221%22}}]`}>
                                {(error, response, isLoading) => {
                                    if(error) { return (<div>Something bad happened: {error.message}</div>)}
                                    else if(isLoading) {return (<div></div>)}
                                    else if(response !== null) {
                                        return (<div>{response.data[0].result.map((item, index) => {
                                            return(
                                                <Link onClick={this.golink.bind(this, index)} key={index} className="tabLink" activeClassName="tabLinkActive">{item.category_name}</Link>
                                            )})}</div>)}
                                    return (<div></div>)
                                }}
                            </Get>
                        </div>    
                    </div>
                </div>
                <Hammer onSwipe={this.listSwipe.bind(this)} options={options} className={css(c.category)}>
                    <div className="categoryItem" style={{width:window.innerWidth}}>
                        <div className={css(c.categoryWr)}>
                            <Get url={`http://dev.kaerus.ru/Pwa/getItems.json?commands=[{%22data%22:{%22categoryId%22:${this.state.n + 1},%22client_id%22:%2281dc9bdb52d04dc20036dbd8313ed055%22,%22platform%22:%22$1%22}}]`}>
                                {(er, res, isL) => {
                                if(er) { return (<div>Something bad happened: {er.message}</div>)}
                                else if(isL) {return (<div></div>)}
                                else if(res !== null) {
                                    return (
                                        <div>
                                            {res.data[0].result.map((item, index) => {
                                                return(
                                                    <Item key={index} item={item} category={item.category_name} name={item.item_name} description={item.item_description} imageS={item.item_image_s} imageM={item.item_image_m} id={item.item_id} />
                                                )
                                            })}
                                        </div>
                                    )
                                }
                                    return (<div></div>)
                                }}
                            </Get>
                        </div>
                    </div>
                </Hammer>
            </div>
        )
    }
}