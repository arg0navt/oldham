import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { css } from 'aphrodite/no-important';
import { connect } from 'react-redux';
import card from '../../css/card'
import { url, API } from '../../config/url'
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch } from 'react-axios'
import progressBar from '../../css/progressBar'
import {Link} from 'react-router';
import axios  from 'axios'

const BarItem = ({progress, procent, status, active, length}) => (
    <div className={active == 'active' ? css(progressBar.item, progressBar.active) : css(progressBar.item)} >
        <div className={css(progressBar.circle)}></div>
        <div className={css(progressBar.num)}>{progress}</div>
        <div className={active == 'active' ? css(progressBar.text, progressBar.active) : css(progressBar.text)}>
            {status}<br/>{procent}%
        </div>
    </div>
)

const ProgressBar = (props, {num}) => {
    if (num < 50){
        num = num / 0.6 - 12
    } else if (num == 50){
        num = 66
    } else if (num > 50){
        num = 50 + num / 2
        console.log(num)
    }
    return (
    <div className={css(progressBar.wrap)}>
        <div className={css(progressBar.line)}></div>
        <div className={css(progressBar.lineProgressWrap)}>
            <div className={css(progressBar.lineProgress)} style={{width:num + '%'}}></div>
        </div>
        <div className={css(progressBar.items)}>
        {props.State.userLoyalty.settings.cards.map((item, index) =>{
            return <BarItem key={index} progress={0} procent={5} status={'Basis'} active={num > 0 ? 'active' : ''} />
        })}
        </div>
    </div>
)}

class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
            num: 0,
            login:false
        }
    }
    render(){
        return(
            <div className={css(card.blockCard)}>
                <div className={css(card.cardContent)}>
                    <div className={css(card.cardTop)}>
                        <div className={css(card.cardLogo)}>
                            {Object.keys(this.props.Store.userLoyalty).length != 0 ? (
                            <div>
                                {this.props.Store.userLoyalty.user_activity > 0 && this.props.Store.userLoyalty.user_activity < 25  ? (
                                    <img className={css(card.cardProcent)} src={`${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/main_card/percent_${this.props.Store.userLoyalty.settings.cards[0].percent}.png`} alt=""/>
                                ) :
                                this.props.Store.userLoyalty.user_activity >= 25 && this.props.Store.userLoyalty.user_activity < 50 ? (
                                    <img className={css(card.cardProcent)} src={`${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/main_card/percent_${this.props.Store.userLoyalty.settings.cards[1].percent}.png`} alt=""/>
                                ) :
                                this.props.Store.userLoyalty.user_activity >= 50 ? (
                                    <img className={css(card.cardProcent)} src={`${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/main_card/percent_${this.props.Store.userLoyalty.settings.cards[2].percent}.png`} alt=""/>
                                ) :
                                this.props.Store.userLoyalty.user_activity == 100 ? (
                                    <img className={css(card.cardProcent)} src={`${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/main_card/percent_${this.props.Store.userLoyalty.settings.cards[3].percent}.png`} alt=""/>
                                ) : ''}
                                <p className={css(card.procentText)}>
                                {this.props.Store.userLoyalty.user_card.title} {this.props.Store.userLoyalty.user_card.percent}%
                                </p>
                            </div>
                            ) : (<div></div>)}
                        </div>
                        <div className={css(card.cardInfo)}>
                            {Object.keys(this.props.Store.userLoyalty).length != 0 == true ? (
                                <div>
                                    <Link to="/user" className={css(card.cardName)}>{this.props.Store.user.user_name}</Link>
                                    <p className={css(card.cardScore)}>активность <span className={css(card.cardScoreActive)}>{this.props.Store.userLoyalty.user_activity}</span> из 100</p>
                                    <div className={css(progressBar.wrap)}>
                                        <div className={css(progressBar.line)}></div>
                                        <div className={css(progressBar.lineProgressWrap)}>
                                            <div className={css(progressBar.lineProgress)} style={{width:`${(100/this.props.Store.userLoyalty.settings.cards.length) * (this.props.Store.userLoyalty.settings.cards.length - 1) - 2}%`}}>
                                                <div className={css(progressBar.lin)} style={this.props.Store.userLoyalty.user_activity < 50 ? {width:`${(this.props.Store.userLoyalty.user_activity/50) * 100}%`} : {width:'100%'}}></div>
                                            </div>
                                            <div className={css(progressBar.lineProgress)} style={{width:`${(100/this.props.Store.userLoyalty.settings.cards.length) * (this.props.Store.userLoyalty.settings.cards.length - (this.props.Store.userLoyalty.settings.cards.length - 1)) - 2}%`}}>
                                                <div className={css(progressBar.lin)} style={this.props.Store.userLoyalty.user_activity > 50 ? {width:`${((this.props.Store.userLoyalty.user_activity - 50)/50) * 100}%`} : {width:'0%'}}></div>
                                            </div>
                                        </div>
                                        <div className={css(progressBar.items)}>
                                            {this.props.Store.userLoyalty.settings.cards.map((item, index) =>{
                                                return <BarItem key={index} progress={item.activity} procent={item.percent} length={this.props.Store.userLoyalty.settings.cards.length} status={item.title_short} active={parseFloat(this.props.Store.userLoyalty.user_activity) >= parseFloat(item.activity) ? 'active' : ''} />
                                            })}
                                        </div>
                                    </div>
                                </div>       
                            ) : (
                                <div>
                                    <p className={css(card.noUserText)}>Заполните свой профиль для получения BASIS CARD 5%</p>
                                    <Link className={css(card.noUserButton)} to="/comein">войти в свой аккаунт</Link>
                                </div>)}
                        </div>
                    </div>
                    {Object.keys(this.props.Store.userLoyalty).length != 0 == true ? (
                    <div className={css(card.cardBottom)}>
                        <div className={css(card.cardBottomLeft)}>
                            <p className={css(card.cardBottomNum)}>кол-во баллов<br /><span className={css(card.cardBottomNumAction)}>100</span></p>
                        </div>
                        <div className={css(card.cardBottomRight)}>
                            <div className={css(card.cardButtonWrap)}>
                                <div className={css(card.cardButton, card.cardButtonOne)}>
                                    предъявить карту и<br/><span className={css(card.cardButtonText)}>Получить баллы</span>
                                </div>
                                <div className={css(card.cardButton, card.cardButtonOne)}>
                                    выбрать подарок и<br/><span className={css(card.cardButtonText)}>Потратить баллы</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    ) : (<div></div>)}
                </div>
                {this.props.Store.userLoyalty.user_activity > 0 && this.props.Store.userLoyalty.user_activity < 25  ? (
                    <img className={css(card.cardImg)} src={`${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/main_card/bg_card_${this.props.Store.userLoyalty.settings.cards[0].percent}.png`} alt=""/>
                ) :
                this.props.Store.userLoyalty.user_activity >= 25 && this.props.Store.userLoyalty.user_activity < 50 ? (
                    <img className={css(card.cardImg)} src={`${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/main_card/bg_card_${this.props.Store.userLoyalty.settings.cards[1].percent}.png`} alt=""/>
                ) :
                this.props.Store.userLoyalty.user_activity >= 50 ? (
                    <img className={css(card.cardImg)} src={`${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/main_card/bg_card_${this.props.Store.userLoyalty.settings.cards[2].percent}.png`} alt=""/>
                ) :
                this.props.Store.userLoyalty.user_activity == 100 ? (
                    <img className={css(card.cardImg)} src={`${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/main_card/bg_card_${this.props.Store.userLoyalty.settings.cards[3].percent}.png`} alt=""/>
                ) : ''}
                {Object.keys(this.props.Store.userLoyalty).length == 0 ? (
                    <img className={css(card.cardImg)} src={`${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/main_card/bg_card_no_auth.png`} alt=""/>
                ) : ''}
            </div>
        )
    }
}
export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({
      userLoyalty: (item) => {dispatch({type:'PUSH_USER_LOYALTY', payload:item})}
  })
)(Card)