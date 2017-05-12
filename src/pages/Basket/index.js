import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import { connect } from 'react-redux';
import { Recomendation } from '../../ui/recomendation'
import { CatalogPanel } from '../../ui/catalogPanel'
import basket from '../../css/basket'
import global from '../../css/global'

class Basket extends Component{
    render(){
        return(
            <div>
            <div className={css(basket.basketPage)}>
                <div className={css(basket.basketAvtorizations)}>
                    <p className={css(basket.avtorizationsText)}>
                        Авторизуйтесь
                        <span className={css(basket.avtorizationSpan)}>для удобства</span>
                    </p>
                </div>
                <div className={css(basket.code)}>
                    <input type="text" className={css(basket.codeInput)} placeholder="Пароль для участия в акции" />
                </div>
                <div className={css(basket.items)}>
                    <div className={css(basket.item)}>
                        <div className={css(basket.itemTop)}>
                            <div className={css(basket.itemTopLeft)}>
                                <p className={css(basket.type)}>Пицца</p>
                                <p className={css(basket.name)}>Романья на тонком тесте</p>
                            </div>
                            <div className={css(basket.itemTopRight)}>
                                <div className={css(global.uiNum, basket.uiNum)}>
                                    <div className={css(global.minus)}></div>
                                    <input className={css(global.input)} type="text" value={'2'} />
                                    <div className={css(global.plus)}></div>
                                </div>
                            </div>
                        </div>
                        <div className={css(basket.list)}>
                            <div className={css(basket.listItem)}>Тигровая креветка (2)</div>
                            <div className={css(basket.listItem)}>Куриная грудка (4)</div>
                        </div>
                        <p className={css(basket.summ)}>450 х 3 = 1350 ₽</p>
                    </div>
                    <div className={css(basket.item)}>
                        <div className={css(basket.itemTop)}>
                            <div className={css(basket.itemTopLeft)}>
                                <p className={css(basket.type)}>Пицца</p>
                                <p className={css(basket.name)}>Охотничья</p>
                            </div>
                            <div className={css(basket.itemTopRight)}>
                                <div className={css(global.uiNum, basket.uiNum)}>
                                    <div className={css(global.minus)}></div>
                                    <input className={css(global.input)} type="text" value={'2'} />
                                    <div className={css(global.plus)}></div>
                                </div>
                            </div>
                        </div>
                        <div className={css(basket.list)}>
                            <div className={css(basket.listItem)}>Свинина (8)</div>
                            <div className={css(basket.listItem)}>Бекон (12)</div>
                            <div className={css(basket.listItem)}>Ветчина (1)</div>
                        </div>
                        <p className={css(basket.summ)}>600 ₽</p>
                    </div>
                    <div className={css(basket.total)}>
                        <p className={css(basket.totalTextOne)}>Итого 4 блюда на <span className={css(basket.totalSpan)}>1950 ₽</span></p>
                        <p className={css(basket.totalTextTwo)}>Предварительная стоимость заказа<br/>без учета скидки и доставки</p>
                    </div>
                </div>
                </div>
                <Recomendation />
                <CatalogPanel />
            </div>
        )
    }
}
export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({})
)(Basket)