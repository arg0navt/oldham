import React, { Component } from 'react';
import detail from '../../css/detail'
import global from '../../css/global'
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { css } from 'aphrodite/no-important';
import { Item } from '../../ui/item'
import { Recomendation } from '../../ui/recomendation'
import { CatalogPanel } from '../../ui/catalogPanel'

class Detail extends Component{
    render(){
        return(
            <div className={css(detail.detailPage)}>
                <div className={css(detail.detailPich)}>
                    <img className={css(detail.detailImg)} src="/img/picher/pich3.jpg" alt=""/>
                </div>
                <div className={css(detail.detailText)}>
                    <div className={css(detail.detailTextStatus)}>
                        <div className={css(detail.itemStatus, global.newIt)}>new</div>
                        <div className={css(detail.itemStatus, global.hot)}><img className={css(detail.imgIcon)} src="/img/icon/status/icon-1.png" alt=""/></div>
                    </div>
                    <p className={css(detail.name)}>Охотничья</p>
                    <p className={css(detail.description)}>
                        <span className={css(detail.span)}>Состав</span>
                        Охотничьи колбаски, шампиньоны свежие, перец болгарский, маслины оливки, орегано. К пицце подается фирменный томатный соус.
                    </p>
                </div>
                <div className={css(detail.list)}>
                    <div className={css(detail.listItem)}>
                        <div className={css(detail.listItemLeft)}>
                            <div className={css(detail.param)}>
                                <span className={css(detail.paramNum)}>30</span>см
                            </div>
                            <div className={css(detail.price)}>497 ₽</div>
                        </div>
                        <div className={css(detail.listItemRight)}>
                            <div className={css(global.uiNum)}>
                                <div className={css(global.minus)}></div>
                                <input className={css(global.input)} type="text" value={'2'} />
                                <div className={css(global.plus)}></div>
                            </div>
                        </div>
                    </div>
                    <div className={css(detail.listItem)}>
                        <div className={css(detail.listItemLeft)}>
                            <div className={css(detail.param)}>
                                <span className={css(detail.paramNum)}>40</span>см
                            </div>
                            <div className={css(detail.price)}>600 ₽</div>
                        </div>
                        <div className={css(detail.listItemRight)}>
                            <div className={css(global.uiNum)}>
                                <button className={css(global.addCart)}>В корзину</button>
                            </div>
                        </div>
                    </div>
                    <div className={css(detail.addIngredient)}><p className={css(detail.addIngredientText)}><img className={css(detail.addIngredientImg)} src="/img/icon/plus.png" />Добавить ингредиенты</p></div>
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
)(Detail)