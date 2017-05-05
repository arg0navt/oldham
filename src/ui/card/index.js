import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { css } from 'aphrodite/no-important';
import card from '../../css/card'
import progressBar from '../../css/progressBar'

const BarItem = ({progress, procent, status, active}) => (
    <div className={active == 'active' ? css(progressBar.item, progressBar.active) : css(progressBar.item)}>
        <div className={css(progressBar.circle)}></div>
        <div className={css(progressBar.num)}>{progress}</div>
        <div className={active == 'active' ? css(progressBar.text, progressBar.active) : css(progressBar.text)}>
            {status}<br/>{procent}%
        </div>
    </div>
)

const ProgressBar = ({num}) => (
    <div className={css(progressBar.wrap)}>
        <div className={css(progressBar.line)}></div>
        <div className={css(progressBar.lineProgressWrap)}>
            <div className={css(progressBar.lineProgress)} style={{width:num + '%'}}></div>
        </div>
        <div className={css(progressBar.items)}>
            <BarItem progress={0} procent={5} status={'Basis'} active={num >= 0 && num < 25 ? 'active' : ''} />
            <BarItem progress={25} procent={10} status={'Silver'} active={num >= 25 && num < 50 ? 'active' : ''} />
            <BarItem progress={50} procent={15} status={'Gold'} active={num >= 50 && num < 100 ? 'active' : ''} />
            <BarItem progress={100} procent={20} status={'VIP'} active={num == 100 ? 'active' : ''} />
        </div>
    </div>
)

export default class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
            num: 74
        }
    }
    render(){
        return(
            <div className={css(card.blockCard)}>
                <div className={css(card.cardContent)}>
                    <div className={css(card.cardTop)}>
                        <div className={css(card.cardLogo)}><img className={css(card.cardLogoImg)} src="/img/icon/logo.png" alt=""/><p className={css(card.cardlogoNum)}>Gold Card 15%</p></div>
                        <div className={css(card.cardInfo)}>
                            <p className={css(card.cardName)}>Евгений Новиков</p>
                            <p className={css(card.cardScore)}>
                                активность <span className={css(card.cardScoreActive)}>{this.state.num}</span> из 100
                            </p>
                            <ProgressBar num={this.state.num} />
                        </div>
                    </div>
                    <div className={css(card.cardBottom)}>
                        <div className={css(card.cardBottomLeft)}>
                            <p className={css(card.cardBottomNum)}>
                                кол-во баллов<br /><span className={css(card.cardBottomNumAction)}>174</span>
                            </p>
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
                </div>
                <img className={css(card.cardImg)} src="/img/ui/card.png" alt=""/>
            </div>
        )
    }
}