import React, { Component } from 'react';
import {Link} from 'react-router';
import { css } from 'aphrodite/no-important';
import d from '../../css/delivery'
import { connect } from 'react-redux';

class Delivery extends Component{
    render(){
        return(
            <div className={css(d.deliveryPage)}>
                <div className={css(d.item)}>
                    <p className={css(d.itemTextOne)}>Условия доставки</p>
                    <p className={css(d.itemTextTwo)}>Есть исключения, смотрите карту доставки</p>
                    <div className={css(d.itemBlock)}>
                        <div className={css(d.it)}>
                            <div className={css(d.itLeft)}>
                                <img className={css(d.itLeftImg)} src={`${process.env.PUBLIC_URL}/img/icon/delivery/icon-1.png`} alt=""/>
                            </div>
                            <div className={css(d.itRight)}>
                                <p className={css(d.pOne)}>Бесплатная доставка</p>
                                <p className={css(d.pTwo)}>Вы оплачиваете только заказ, мы доствим его бесплатно</p>
                            </div>
                        </div>
                        <div className={css(d.it)}>
                            <div className={css(d.itLeft)}>
                                <img className={css(d.itLeftImg)} src={`${process.env.PUBLIC_URL}/img/icon/delivery/icon-2.png`} alt=""/>
                            </div>
                            <div className={css(d.itRight)}>
                                <p className={css(d.pOne)}>49 минут</p>
                                <p className={css(d.pTwo)}>За это время мы доставим ваш заказ. При заказе не более 3-х блюд и доставке в черте города</p>
                            </div>
                        </div>
                        <div className={css(d.it)}>
                            <div className={css(d.itLeft)}>
                                <img className={css(d.itLeftImg)} src={`${process.env.PUBLIC_URL}/img/icon/delivery/icon-3.png`} alt=""/>
                            </div>
                            <div className={css(d.itRight)}>
                                <p className={css(d.pOne)}>с 10 до 02 часов</p>
                                <p className={css(d.pTwo)}>В эти часы мы приготовим и привезём ваш заказ</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css(d.fullBlock)}>
                    <p className={css(d.fullText)}><img className={css(d.fullTextImg)} src={`${process.env.PUBLIC_URL}/img/icon/delivery/icon-8.png`} alt=""/>Карта доставки</p>
                </div>
                <div className={css(d.item)}>
                    <p className={css(d.itemTextOne)}>Способы доставки</p>
                    <div className={css(d.itemBlock)}>
                        <div className={css(d.it)}>
                            <div className={css(d.itLeft)}>
                                <img className={css(d.itLeftImg)} src={`${process.env.PUBLIC_URL}/img/icon/delivery/icon-4.png`} alt=""/>
                            </div>
                            <div className={css(d.itRight)}>
                                <p className={css(d.pOne)}>Доставка курьером</p>
                                <p className={css(d.pTwo)}>Курьер доставит Ваш заказ по указанному адресу</p>
                            </div>
                        </div>
                        <div className={css(d.it)}>
                            <div className={css(d.itLeft)}>
                                <img className={css(d.itLeftImg)} src={`${process.env.PUBLIC_URL}/img/icon/delivery/icon-5.png`} alt=""/>
                            </div>
                            <div className={css(d.itRight)}>
                                <p className={css(d.pOne)}>Забрать из ресторана</p>
                                <p className={css(d.pTwo)}>Вы можете забрать свой заказ прямо из ресторана по этим адресам</p>
                            </div>
                        </div>
                        <div className={css(d.it)}>
                            <div className={css(d.itLeft)}>
                                <img className={css(d.itLeftImg)} src={`${process.env.PUBLIC_URL}/img/icon/delivery/icon-3.png`} alt=""/>
                            </div>
                            <div className={css(d.itRight)}>
                                <p className={css(d.pOne)}>К определенному времени</p>
                                <p className={css(d.pTwo)}>При заказе сообщите,к какому времени нужна доставка. Всё будет доставленно точно в срок</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css(d.bottom)}>
                    <div className={css(d.bottomTitle)}>Способы оплаты</div>
                    <div className={css(d.bottomWrap)}>
                        <div className={css(d.bottomItem)}>
                            <div className={css(d.bottomItemPich)}>
                                <img className={css(d.bottomItemImg)} style={{width:31}} src={`${process.env.PUBLIC_URL}/img/icon/delivery/icon-6.png`} alt=""/>
                            </div>
                            <p className={css(d.bottomItemPOne)}>Наличными</p>
                            <p className={css(d.bottomItemPTwo)}>Вы можете оплатить заказ наличными курьеру или при получении в ресторане</p>
                        </div>
                        <div className={css(d.bottomItem)}>
                            <div className={css(d.bottomItemPich)}>
                                <img className={css(d.bottomItemImg)} style={{width:36}} src={`${process.env.PUBLIC_URL}/img/icon/delivery/icon-7.png`} alt=""/>
                            </div>
                            <p className={css(d.bottomItemPOne)}>Банковской картой</p>
                            <p className={css(d.bottomItemPTwo)}>Пожалуйста, предупредите нас, если хотите оплатить заказ банковской картой</p>
                        </div>
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
  dispatch =>({})
)(Delivery)