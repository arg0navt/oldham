import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import {css} from 'aphrodite/no-important';
import {connect} from 'react-redux';
import card from '../../css/card'
import {url, API} from '../../config/url'
import {AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch} from 'react-axios'
import progressBar from '../../css/progressBar'
import {Link} from 'react-router';
import * as ActionType from '../../config/ActionType';
import axios from 'axios'

const cardInterval = {
    stepOne: 0,
    stepTwo: 25,
    stepThree: 50,
    stepFour: 100,
};

const staticUrl = `${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/main_card/`;

const BarItem = ({progress, percent, status, active, length}) => (
    <div className={active === 'active' ? css(progressBar.item, progressBar.active) : css(progressBar.item)}>
        <div className={css(progressBar.circle)}></div>
        <div className={css(progressBar.num)}>{progress}</div>
        <div className={active === 'active' ? css(progressBar.text, progressBar.active) : css(progressBar.text)}>
            {status}<br/>{percent}%
        </div>
    </div>
)

const ProgressBar = ({num, userLoyalty, user_activity}) => {
    if (num < cardInterval.stepThree) {
        num = num / 0.6 - 12
    } else if (num === cardInterval.stepThree) {
        num = 66
    } else if (num > cardInterval.stepThree) {
        num = cardInterval.stepThree + num / 2;
    }
    return (
        <div className={css(progressBar.wrap)}>
            <div className={css(progressBar.items)}>
                <div className={css(progressBar.wrap)}>
                    <div className={css(progressBar.line)}></div>
                    <div className={css(progressBar.lineProgressWrap)}>
                        <div className={css(progressBar.lineProgress)} style={{width: num + '%'}}></div>
                    </div>
                    <div className={css(progressBar.items)}>
                        {userLoyalty.settings.cards.map((item, index) => {
                            console.log(item);
                            return <BarItem key={index} progress={item.activity} percent={item.percent} status={item.title_short}
                                            active={num >= Number(item.activity) ? 'active' : ''}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
};

const PercentImg = ({user_activity, userLoyalty}) => {
    if (user_activity > cardInterval.stepOne && user_activity < cardInterval.stepTwo) {
        return <img className={css(card.cardProcent)}
                    src={`${staticUrl}percent_${userLoyalty.settings.cards[0].percent}.png`} alt=""/>
    } else if (user_activity >= cardInterval.stepTwo && user_activity < cardInterval.stepThree) {
        return <img className={css(card.cardProcent)}
                    src={`${staticUrl}percent_${userLoyalty.settings.cards[1].percent}.png`} alt=""/>
    } else if (user_activity >= cardInterval.stepThree) {
        return <img className={css(card.cardProcent)}
                    src={`${staticUrl}percent_${userLoyalty.settings.cards[2].percent}.png`} alt=""/>
    } else if (user_activity === cardInterval.stepFour) {
        return <img className={css(card.cardProcent)}
                    src={`${staticUrl}percent_${userLoyalty.settings.cards[3].percent}.png`} alt=""/>
    } else {
        return null;
    }
};

const BackgroundCard = ({user_activity, userLoyalty}) => {
    if (user_activity > cardInterval.stepOne && user_activity < cardInterval.stepTwo) {
        return <img className={css(card.cardImg)}
                    src={`${staticUrl}bg_card_${userLoyalty.settings.cards[0].percent}.png`}/>
    } else if (user_activity >= cardInterval.stepTwo && user_activity < cardInterval.stepThree) {
        return <img className={css(card.cardImg)}
                    src={`${staticUrl}bg_card_${userLoyalty.settings.cards[1].percent}.png`}/>
    } else if (user_activity >= cardInterval.stepThree) {
        return <img className={css(card.cardImg)}
                    src={`${staticUrl}bg_card_${userLoyalty.settings.cards[2].percent}.png`}/>
    } else if (user_activity === cardInterval.stepFour) {
        return <img className={css(card.cardImg)}
                    src={`${staticUrl}bg_card_${this.props.Store.userLoyalty.settings.cards[3].percent}.png`}/>
    } else {
        return <img className={css(card.cardImg)}
                    src={`${staticUrl}bg_card_no_auth.png`}/>;
    }
};

const CardBottom = () => (
    <div className={css(card.cardBottom)}>
        <div className={css(card.cardBottomLeft)}>
            <p className={css(card.cardBottomNum)}>кол-во баллов<br/><span
                className={css(card.cardBottomNumAction)}>100</span></p>
        </div>
        <div className={css(card.cardBottomRight)}>
            <div className={css(card.cardButtonWrap)}>
                <div className={css(card.cardButton, card.cardButtonOne)}>
                    предъявить карту и<br/><span
                    className={css(card.cardButtonText)}>Получить баллы</span>
                </div>
                <div className={css(card.cardButton, card.cardButtonOne)}>
                    выбрать подарок и<br/><span
                    className={css(card.cardButtonText)}>Потратить баллы</span>
                </div>
            </div>
        </div>
    </div>
)


class Card extends Component {
    render() {
        const { userLoyalty } = this.props.Store;
        const { user_activity } = this.props.Store.userLoyalty;
        return (
            <div className={css(card.blockCard)}>
                <div className={css(card.cardContent)}>
                    <div className={css(card.cardTop)}>
                        <div className={css(card.cardLogo)}>
                            {Object.keys(userLoyalty).length ? (
                                <div>
                                    <PercentImg user_activity={user_activity} userLoyalty={userLoyalty}/>
                                    <p className={css(card.procentText)}>
                                        {userLoyalty.user_card.title} {userLoyalty.user_card.percent}%
                                    </p>
                                </div>
                            ) : null}
                        </div>
                        <div className={css(card.cardInfo)}>
                            {Object.keys(userLoyalty).length ? (
                                <div>
                                    <Link to="/user"
                                          className={css(card.cardName)}>{this.props.Store.user.get('user_name')}</Link>
                                    <p className={css(card.cardScore)}>активность <span
                                        className={css(card.cardScoreActive)}>{user_activity}</span>
                                        из 100</p>
                                    <ProgressBar num={60} user_activity={user_activity} userLoyalty={userLoyalty} />
                                </div>
                            ) : (
                                <div>
                                    <p className={css(card.noUserText)}>Заполните свой профиль для получения BASIS CARD
                                        5%</p>
                                    <Link className={css(card.noUserButton)} to="/comein">войти в свой аккаунт</Link>
                                </div>)}
                        </div>
                    </div>
                    {Object.keys(userLoyalty).length ? (
                        <CardBottom />
                    ) : null}
                </div>
                <BackgroundCard user_activity={user_activity} userLoyalty={userLoyalty}/>
            </div>
        )
    }
}

export default connect(
    state => ({
        Store: state
    }),
    dispatch => ({
        userLoyalty: (item) => {
            dispatch({type: ActionType.PUSH_USER_LOYALTY, payload: item})
        }
    })
)(Card)