import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite/no-important';
import order from '../../css/order'
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import OrderPanel from '../../ui/catalogPanel/panelOrder'
import moment from 'moment';

const now = moment().hour(0).minute(0);

class Order extends Component{
    constructor(props){
        super(props)
        this.state = {
            url:'',
            length:0,
            phone:'',
            fio:'',
            comment:'',
            sity:'',
            home:'',
            apartment:'',
            note:'',
            defer:false,
            dr:false
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            const url = this.props.location.pathname
            const urlArr = url.split('/')
            const first = urlArr[1]
            this.setState({
                url: first
            })
            let n = 0;
            this.props.Store.basket.map((item, index) => {
                if (item.call == undefined){
                    n = parseFloat(n) + 1
                } else {
                    n = parseFloat(n) + parseFloat(item.call)
                }
            })
            this.setState({length:n})
        },10)
    }
    componentWillReceiveProps(nextProps){
        setTimeout(()=>{
            const url = nextProps.location.pathname
            const urlArr = url.split('/')
            const first = urlArr[1]
            this.setState({
                url: first
            })
            let n = 0;
            this.props.Store.basket.map((item, index) => {
                if (item.call == undefined){
                    n = parseFloat(n) + 1
                } else {
                    n = parseFloat(n) + parseFloat(item.call)
                }
            })
            this.setState({length:n})
        },10)
    }
    change(key, event){
        const items = this.state[key];
        this.state[key] = event.target.value;
        this.setState({
            items,
        })
    }
    defer(){
        this.setState({
            defer:!this.state.defer
        })
    }
    dr(){
        this.setState({
            dr:!this.state.dr
        })
    }
    render(){
        return(
            <div className={css(order.orderPage)}>
                <p className={css(order.orderTitle)}>Итого {this.state.length} блюда на <span className={css(order.orderTitleSpan)}>{this.props.Store.price} ₽</span></p>
                <div className={css(order.items)}>
                    <div className={css(order.item)}>
                        <p className={css(order.itemTitle)}>Данные доставки</p>
                        <div className={css(order.itemWrap)}>
                            <div className='inputBlock'>
                                <input className='inputInput' type="text" id="phone" ref={(phone) => this.phone = phone} value={this.state.phone} onChange={this.change.bind(this, 'phone')} />
                                <label htmlFor="phone" className={this.state.phone != "" ? 'inputLabel active' : 'inputLabel'}>Телефон</label>
                            </div>
                            <div className='inputBlock'>
                                <input className='inputInput' type="text" id="fio" ref={(fio) => this.fio = fio} value={this.state.fio} onChange={this.change.bind(this, 'fio')} />
                                <label htmlFor="fio" className={this.state.fio.length != "" ? 'inputLabel active' : 'inputLabel'}>ФИО</label>
                            </div>
                            <div className='inputBlock'>
                                <input  className='inputInput' type="text" id="comment" ref={(comment) => this.comment = comment} value={this.state.comment} onChange={this.change.bind(this, 'comment')} />
                                <label htmlFor="comment" className={this.state.comment != ""? 'inputLabel active' : 'inputLabel'}>Комментарий к заказу</label>
                            </div>
                        </div>
                    </div>
                    <div className={css(order.item)}>
                        <p className={css(order.itemTitle)}>Адрес</p>
                        <div className={css(order.itemWrap)}>
                            <div className='inputBlock'>
                                <input className='inputInput' type="text" id="sity" ref={(sity) => this.sity = sity} value={this.state.sity} onChange={this.change.bind(this, 'sity')} />
                                <label htmlFor="sity" className={this.state.sity != "" ? 'inputLabel active' : 'inputLabel'}>Улица</label>
                            </div>
                            <div className='inputBlock inputBlockDuo inputBlockDuoOne'>
                                <input className='inputInput' type="text" id="home" ref={(home) => this.home = home} value={this.state.home} onChange={this.change.bind(this, 'home')} />
                                <label htmlFor="home" className={this.state.home != "" ? 'inputLabel active' : 'inputLabel'}>Дом</label>
                            </div>
                            <div className='inputBlock inputBlockDuo inputBlockDuoTwo'>
                                <input className='inputInput' type="text" id="apartment" ref={(apartment) => this.apartment = apartment} value={this.state.apartment} onChange={this.change.bind(this, 'apartment')} />
                                <label htmlFor="apartment" className={this.state.apartment != "" ? 'inputLabel active' : 'inputLabel'}>Кв / Офис</label>
                            </div>
                            <div className='inputBlock'>
                                <input className='inputInput' type="text" id="note" ref={(note) => this.note = note} value={this.state.note} onChange={this.change.bind(this, 'note')} />
                                <label htmlFor="note" className={this.state.note != "" ? 'inputLabel active' : 'inputLabel'}>Примечания к адресу</label>
                            </div>
                        </div>
                    </div>
                    <div className={css(order.deferItem)}>
                        <div className={css(order.defer)}>
                            <input className='deferNone' type="checkbox" id="defer" name="defer" onChange={this.defer.bind(this)} value={this.state.defer}/>
                            <label className='deferLabel' htmlFor="defer">Отложенная доставка</label>
                        </div>
                        {this.state.defer == true ? (
                            <div>
                                <p className={css(order.deferP)}>Дата доставки</p>
                                <div className={css(order.timeWr)}><TimePicker defaultValue={now} /></div>
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                    <div className={css(order.deferItem, order.borderTopNone)}>
                        <div className={css(order.defer)}>
                            <input className='deferNone' type="checkbox" id="dr" name="dr" onChange={this.dr.bind(this)} value={this.state.dr}/>
                            <label className='deferLabel' htmlFor="dr">День рождения - скидка 10%</label>
                        </div>
                    </div>
                </div>
                <OrderPanel {...this.state} />
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