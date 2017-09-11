import React, {Component} from 'react';
import {connect} from 'react-redux';
import {css} from 'aphrodite/no-important';
import c from '../../css/catalogPage'
import {Link} from 'react-router';
import * as ActionType from '../../config/ActionType';
import BasketControl from '../catalog/basketControl';

const AddBasket = ({price}) => {
    return (
        <div className={css(c.num)}>
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

const ItemText = ({name, description, type, id}) => (
    <Link to={`/catalog/${type}/${id}`}>
        <p className={css(c.name)}>{name}</p>
        <p className={css(c.descroption)}>{description}</p>
    </Link>
);

const ItemPicture = ({type, id, img}) => (
    <div className={css(c.itemPich)}>
        <div className={css(c.itemImgWr)}>
            <Link to={`/catalog/${type}/${id}`}><img className={css(c.img)}
                                                     src={`http://dev.kaerus.ru/uploads/${img}`}
                                                     alt=""/></Link>
        </div>
    </div>
);

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: false
        };

        this.switchItemSize = this.switchItemSize.bind(this);
    }

    switchItemSize(newSize) {
        this.setState({size: newSize});
    }

    render() {
        const {
            item_image_m,
            item_description,
            item_name,
            item_id,
            item_price,
            item_size_m_price
        } = this.props.item;
        return (
            <div className={css(c.item)}>
                <ItemPicture type={this.props.type} id={item_id} img={item_image_m}/>
                <div className={css(c.itemText)}>
                    <ItemText id={item_id} name={item_name} description={item_description} type={this.props.type}/>
                    {item_size_m_price ? (
                        <SwitchSize isActive={this.state.size} switchItemSize={this.switchItemSize}/>
                    ) : null}
                    {this.state.size ? <BasketControl key={`${item_id}true`} item={this.props.item} size={true} addBlock={<AddBasket
                            price={Number(item_price) + Number(item_size_m_price)}/>}/>
                        : <BasketControl key={`${item_id}false`} item={this.props.item} size={false}
                                         addBlock={<AddBasket price={Number(item_price)}/>}/>}
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


