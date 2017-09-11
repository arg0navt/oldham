import React, {Component} from 'react';
import detail from '../../css/detail'
import global from '../../css/global'
import {connect} from 'react-redux';
import {css} from 'aphrodite/no-important';
import {Item} from '../../ui/item'
import {CatalogPanel} from '../../ui/catalogPanel'
import {getDetailItem} from '../../queries/catalog';

class Detail extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.pushGetDetailItem(this.props.params.id);
    }

    render() {
        const {detailItem} = this.props.Store;
        const {
            item_image_750x480,
            item_name,
            item_description,
        } = detailItem;
        return (
            <div className={css(detail.detailPage)}>
                {Object.keys(detailItem).length ? (
                    <div>
                        <div className={css(detail.detailPich)}>
                            <img className={css(detail.detailImg)}
                                 src={`http://dev.kaerus.ru/uploads/${item_image_750x480}`} alt=""/>
                        </div>
                        <div className={css(detail.detailText)}>
                            <p className={css(detail.name)}>{item_name}</p>
                            <p className={css(detail.description)}>
                                <span className={css(detail.span)}>Состав</span>
                                {item_description}
                            </p>
                        </div>
                        <div className={css(detail.list)}>
                            <div className={css(detail.listItem)}>
                                <div className={css(detail.listItemLeft)}>
                                    <div className={css(detail.param)}>
                                        <span className={css(detail.paramNum)}>30</span>см
                                    </div>
                                    <div className={css(detail.price)}> ₽</div>
                                </div>
                                <div className={css(detail.listItemRight)}>
                                    <div className={css(global.uiNum)}>
                                        <button className={css(global.addCart)}>В корзину</button>
                                    </div>
                                    <div className={css(global.uiNum)} ref={(numWrap) => this.numWrap = numWrap}>
                                        <div className={css(global.minus)}/>
                                        <input className={css(global.input)} type="text"/>
                                        <div className={css(global.plus)}/>
                                    </div>
                                </div>
                            </div>
                            <div className={css(detail.listItem)}>
                                <div className={css(detail.listItemLeft)}>
                                    <div className={css(detail.param)}>
                                        <span className={css(detail.paramNum)}>40</span>см
                                    </div>
                                    <div
                                        className={css(detail.price)}>
                                        ₽
                                    </div>
                                </div>
                                <div className={css(detail.listItemRight)}>
                                    <div className={css(global.uiNum)}>
                                        <button className={css(global.addCart)}>В корзину</button>
                                    </div>
                                    <div className={css(global.uiNum)} ref={(numWrap) => this.numWrap = numWrap}>
                                        <div className={css(global.minus)}/>
                                        <input className={css(global.input)} type="text"/>
                                        <div className={css(global.plus)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        )
    }
}

export default connect(
    state => ({
        Store: state
    }),
    dispatch => ({
        pushGetDetailItem: (id) => {
            getDetailItem(dispatch, id)
        }
    })
)(Detail)