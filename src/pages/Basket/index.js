import React, {Component} from 'react';
import {css} from 'aphrodite/no-important';
import {connect} from 'react-redux';
import b from '../../css/basket';
import ItemBasket from '../../ui/item/basket';

const Result = ({data}) => (
    <div className={css(b.total)}>
        <p className={css(b.totalTextOne)}>Итого {data.numbers} блюда на <span
            className={css(b.totalSpan)}>{data.price ? data.price : '0'} ₽</span></p>
        <p className={css(b.totalTextTwo)}>Предварительная стоимость заказа<br/>без учета скидки и доставки</p>
    </div>
);

class Basket extends Component {
    render() {
        const {basket} = this.props.Store;
        let data = {
            price:0,
            numbers: 0,
        };
        if (basket) {
            basket.map((item) => {
                data = {
                    numbers: +item.numbers,
                    price: +item.price,
                };
                return data
            });
        }
        return (
            <div>
                {basket.length ? (
                    <div className={css(b.basketPage)}>
                        <div className={css(b.items)}>
                            {basket.map((item) => <ItemBasket item={item}
                                                              key={`${item.item_id}${item.size}`}/>)}
                            <Result data={data}/>
                        </div>
                    </div>
                ) : (
                    <div style={{textAlign: 'center', color: '#fff'}}>Корзина пуста</div>
                )}
            </div>
        )
    }
}

export default connect(
    state => ({
        Store: state
    })
)(Basket)