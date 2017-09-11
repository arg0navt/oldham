import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite/no-important';
import b from '../../css/basket';
import BasketControl from '../catalog/basketControl';

class ItemBasket extends Component{
    render(){
        const {
            name,
            numbers,
            id,
            price,
            category,
            size
        } = this.props.item;
        const priceOne = price/numbers;
        return(
            <div className={css(b.item)}>
                <div className={css(b.itemTop)}>
                    <div className={css(b.itemTopLeft)}>
                        <p className={css(b.type)}>{category}</p>
                        <p className={css(b.name)}>{name}</p>
                    </div>
                    <div className={css(b.itemTopRight)}>
                        <BasketControl item={{item_name: name, category_name: category, item_id: id, item_price: priceOne, size: size }} size={size} key={`${id + size}`} />
                    </div>
                </div>
                <p className={css(b.summ)}>
                    {numbers > 1 ? `${priceOne}₽ + ${numbers} = ${price}` : `${price}₽`}
                </p>
            </div>
        )
    }
}

export default connect(
    state => ({
        Store: state
    })
)(ItemBasket)