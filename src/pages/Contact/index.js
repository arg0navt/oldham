import React, { Component } from 'react';
import {Link} from 'react-router';
import { css } from 'aphrodite/no-important';
import con from '../../css/contact'

export default class Contact extends Component{
    render(){
        return(
            <div className={css(con.pageContact)}>
                <div className={css(con.Top)}>
                    <p className={css(con.topOne)}>СЛУЖБА ГОРЯЧЕЙ<br/>ДОСТАВКИ GOURMETTO</p>
                    <p className={css(con.topTwo)}>8(8162) 700-300</p>
                    <p className={css(con.topThree)}>Ежедневно, с 10 до 2 часов ночи</p>
                </div>
                <div className={css(con.item)}>
                    <div className={css(con.itemLeft)}>
                        <img className={css(con.itemLeftImg)} src={`${process.env.PUBLIC_URL}/img/icon/con1.png`} alt=""/>
                    </div>
                    <div className={css(con.itemRight)}>
                        <p className={css(con.sity)}>Великий Новгород</p>
                        <p className={css(con.addres)}>ул. Ломоносова, д. 18, кор. 2</p>
                        <Link className={css(con.addMap)}>Посмотреть на карте</Link>
                    </div>
                </div>
                <div className={css(con.itemPhone)}>
                    <div className={css(con.itemPhoneLeft)}>
                        <p className={css(con.itemPhoneText)}>
                            Телефон
                            <span className={css(con.itemPhoneSpan)}>8 (8162) 92-64-94</span>
                        </p>
                    </div>
                    <div className={css(con.itemPhoneRight)}>
                        <button className={css(con.itemPhoneButton)}>позвонить</button>
                    </div>
                </div>
                <div className={css(con.itemPhone)}>
                    <div className={css(con.itemPhoneLeft)}>
                        <p className={css(con.itemPhoneTextOne)}>Время работы</p>
                        <p className={css(con.itemPhoneTextTwo)}>Ежедневно<br/>
с 11:00 до 23 часов</p>
                    </div>
                    <div className={css(con.itemPhoneRight)} />
                </div>
                <div className={css(con.item)}>
                    <div className={css(con.itemLeft)}>
                        <img className={css(con.itemLeftImg)} src={`${process.env.PUBLIC_URL}/img/icon/con2.png`} alt=""/>
                    </div>
                    <div className={css(con.itemRight)}>
                        <p className={css(con.sity)}>Великий Новгород</p>
                        <p className={css(con.addres)}>ул. Псковская, д. 11</p>
                        <Link className={css(con.addMap)}>Посмотреть на карте</Link>
                    </div>
                </div>
            </div>
        )
    }
}