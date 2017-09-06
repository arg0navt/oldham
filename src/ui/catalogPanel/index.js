import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import c from '../../css/catalogPage'
import { connect } from 'react-redux';
import {Link} from 'react-router';

const Panel = ({price, numbers}) => (
    <div className={css(c.bottom)}>
        <Link to="/basket">
            <div className={css(c.bottomItem, c.iconKorz)}>
                <p className={css(c.bottomTextOne)}>В корзине</p>
                <p className={css(c.bottomTextTwo)}>
                    <span className={css(c.bottomTextTwoSpan)}>{numbers}</span> позиций
                </p>
            </div>
        </Link>
        <Link to="/basket">
            <div className={css(c.bottomItem, c.border)}>
                <p className={css(c.bottomTextOne)}>На сумму</p>
                <p className={css(c.bottomTextTwo)}>
                    <span className={css(c.bottomTextTwoSpan)}>{price} ₽</span>
                </p>
            </div>
        </Link>
    </div>
);

class CatalogPanel extends Component {
    render(){
        const { basket } = this.props.Store;
        let price = 0;
        basket.map((item) => {
            return price+=item.price;
        });
        return(
            <div>
                {basket.length > 0 ? <Panel price={price} numbers={basket.length} /> : null}
            </div>
        )
    }
}
export default connect(
  state => ({
    Store: state
  }),
)(CatalogPanel)