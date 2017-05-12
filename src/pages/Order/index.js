import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite/no-important';
import order from '../../css/order'

class Order extends Component{
    render(){
        return(
            <div className={css(order.orderPage)}>
                <p className={css(order.orderTitle)}>Итого 4 блюда на <span className={css(order.orderTitleSpan)}>1950 ₽</span></p>
                <div className={css(order.items)}>
                    <div className={css(order.item)}>
                        <p className={css(order.itemTitle)}>Данные доставки</p>
                        <div className={css(order.itemWrap)}>
                            <div className={css(order.inputBlock)}>
                                <input className={css(order.inputInput)} placeholder="Телефон" type="text" id="phone" ref={(phone) => this.phone = phone} />
                            </div>
                            <div className={css(order.inputBlock)}>
                                <input className={css(order.inputInput)} placeholder="ФИО" type="text" id="fio" ref={(fio) => this.fio = fio} />
                            </div>
                            <div className={css(order.inputBlock)}>
                                <input className={css(order.inputInput)} placeholder="Комментарий к заказу" type="text" id="comment" ref={(comment) => this.comment = comment} />
                            </div>
                        </div>
                    </div>
                    <div className={css(order.item)}>
                        <p className={css(order.itemTitle)}>Адрес</p>
                        <div className={css(order.itemWrap)}>
                            <div className={css(order.inputBlock)}>
                                <input className={css(order.inputInput)} placeholder="Улица" type="text" id="sity" ref={(sity) => this.sity = sity} />
                            </div>
                            <div className={css(order.inputBlock, order.inputBlockDuo, order.inputBlockDuoOne)}>
                                <input className={css(order.inputInput)} placeholder="Дом" type="text" id="home" ref={(home) => this.home = home} />
                            </div>
                            <div className={css(order.inputBlock, order.inputBlockDuo, order.inputBlockDuoTwo)}>
                                <input className={css(order.inputInput)} placeholder="Кв / Офис" type="text" id="apartment" ref={(apartment) => this.apartment = apartment} />
                            </div>
                            <div className={css(order.inputBlock)}>
                                <input className={css(order.inputInput)} placeholder="Примечания к адресу" type="text" id="note" ref={(note) => this.note = note} />
                            </div>
                        </div>
                    </div>
                    <div className={css(order.defer)}>
                        
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
)(Order)