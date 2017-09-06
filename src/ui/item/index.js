import React, {Component} from 'react';
import {connect} from 'react-redux';
import {css} from 'aphrodite/no-important';
import c from '../../css/catalogPage'
import global from '../../css/global'
import {Link} from 'react-router';
import * as ActionType from '../../config/ActionType';
import _ from 'underscore';

const operatorName = {
    add: 'add',
    clean: 'clean'
};

const NumbersItem = ({numbers, onEvent}) => (
    <div className={css(global.uiNum, c.numItem)}>
        <div className={css(global.minus, c.minus)} onClick={() => onEvent(operatorName.clean)} />
        <input className={css(global.input, c.input)} type="text" value={numbers}/>
        <div className={css(global.plus, c.plus)} onClick={() => onEvent(operatorName.add)} />
    </div>
);


const NumbersItems = ({size, numbers, onEvent}) => {
    if (size) {
        return <NumbersItem numbers={numbers.sizeNumbers} onEvent={onEvent}/>
    } else {
        return <NumbersItem numbers={numbers.default} onEvent={onEvent}/>
    }
};

const AddBasket = ({price, addBasket}) => {
    return (
        <div className={css(c.num)} onClick={() => addBasket(operatorName.add)}>
            <div className={css(c.start)}>
                <div className={css(c.price)}>{price} ₽</div>
                <div className={css(c.plus)}>+</div>
            </div>
        </div>
    )
};

const SwitchSize = ({isActive, switchItemSize}) => (
    <div className={css(c.width)}>
        <div onClick={() => switchItemSize(false)}
             className={isActive ? css(c.widthItem) : css(c.widthItem, c.widthItemActive)}>
            30 см
        </div>
        <div onClick={() => switchItemSize(true)}
             className={isActive ? css(c.widthItem, c.widthItemActive) : css(c.widthItem)}>
            40 см
        </div>
    </div>
);

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: {
                default: 0,
            },
            numbers: {
                default: 0,
            },
            size: false
        };

        this.onBasket = this.onBasket.bind(this);
        this.switchItemSize = this.switchItemSize.bind(this);
    }

    switchItemSize(newSize) {
        this.setState({size: newSize});
    }

    onBasket(operator) {
        const {
            item_name,
            category_name,
            item_id,
            item_price,
            item_size_m_price,
        } = this.props.item;

        const pushNewState = (numbers, priceItem, size) => {
            const price = numbers * priceItem;
            this.setState({price: {default: price}});
            this.props.addBasket({
                name: item_name,
                category: category_name,
                id: item_id,
                numbers: numbers,
                price: price,
                size: size
            })
        };

        const eventsItem = (price, numbers, size) => {
            if (operator === operatorName.add) {
                Object.assign(this.state.numbers, {[numbers]: ++this.state.numbers[numbers]});
                pushNewState(this.state.numbers[numbers], price, size);
            } else if (operator === operatorName.clean) {
                if (this.state.numbers[numbers] > 1) {
                    Object.assign(this.state.numbers, {[numbers]: --this.state.numbers[numbers]});
                    pushNewState(this.state.numbers[numbers], price, size);
                } else if (this.state.numbers[numbers] === 1) {
                    Object.assign(this.state.numbers, {[numbers]: 0});
                    Object.assign(this.state.price, {[numbers]: 0});
                    this.props.deleteItemBasket({
                        name: item_name,
                        category: category_name,
                        id: item_id,
                        numbers: this.state.numbers[numbers],
                        price: this.state.price[numbers],
                        size: size
                    })
                }
            }
        };

        if (this.state.size) {
            eventsItem(Number(item_price) + Number(item_size_m_price), 'sizeNumbers', true);
        } else {
            eventsItem(Number(item_price), 'default', false);
        }
    }

    componentDidMount() {
        if (this.props.item.item_size_m_price) {
            this.setState({price: {default: this.state.price.default, sizePrice: 0}});
            this.setState({numbers: {default: this.state.numbers.default, sizeNumbers: 0}});
        }
    }


    render() {
        const {
            item_image_m,
            item_image_s,
            item_description,
            item_name,
            category_name,
            item_id,
            item_price,
            item_size_m_price
        } = this.props.item;
        return (
            <div className={css(c.item)}>
                <div className={css(c.itemPich)}>
                    <div className={css(c.itemImgWr)}>
                        <Link to={`/catalog/${this.state.link}/${item_id}`}><img className={css(c.img)}
                                                                                 src={`http://dev.kaerus.ru/uploads/${item_image_m}`}/></Link>
                    </div>
                </div>
                <div className={css(c.itemText)}>
                    <Link to={`/catalog/${this.state.link}/${item_id}`}>
                        <p className={css(c.name)}>{item_name}</p>
                        <p className={css(c.descroption)}>{item_description}</p>
                    </Link>
                    {item_size_m_price ? (
                        <SwitchSize isActive={this.state.size} switchItemSize={this.switchItemSize}/>
                    ) : null}
                    {(this.state.numbers.default && !this.state.size) || (this.state.numbers.sizeNumbers && this.state.size) ? (
                        <NumbersItems size={this.state.size} numbers={this.state.numbers} onEvent={this.onBasket}/>
                    ) : (
                        <div>{this.state.size ? (
                            <AddBasket price={Number(item_price) + Number(item_size_m_price)}
                                       addBasket={this.onBasket}/>
                        ) : <AddBasket price={item_price} addBasket={this.onBasket}/>}</div>
                    )}
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        Store: state
    }),
    dispatch => ({
        addBasket: (item) => {
            dispatch({type: ActionType.ADD_BASKET, payload: item});
        },
        deleteItemBasket: (item) => {
            dispatch({type: ActionType.DELETE_ITEM_BASKET, payload: item});
        }
    })
)(Item)


