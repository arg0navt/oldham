import React, {Component} from 'react';
import detail from '../../css/detail'
import global from '../../css/global'
import {connect} from 'react-redux';
import {css} from 'aphrodite/no-important';
import {getDetailItem} from '../../queries/catalog';
import BasketControl from '../../ui/catalog/basketControl';

const AddBasket = () => (
    <button className={css(global.addCart)}>В корзину</button>
);

const DetailControl = ({price, type, size, item}) => (
    <div className={css(detail.listItem)}>
        <div className={css(detail.listItemLeft)}>
            {type ? (
                <div className={css(detail.param)}>
                    <span className={css(detail.paramNum)}>{size ? '40' : '30'}</span>см
                </div>
            ) : null}
            <div className={css(detail.price)}>{price} ₽</div>
        </div>
        <div className={css(detail.listItemRight)}>
            <div className={css(global.uiNum)}>
                <BasketControl key={`${item.item_id}${size}`} size={size} item={item} addBlock={<AddBasket/>} />
            </div>
        </div>
    </div>
);

const DetailPicture = ({image}) => (
    <div className={css(detail.detailPich)}>
        <img className={css(detail.detailImg)}
             src={`http://dev.kaerus.ru/uploads/${image}`} alt=""/>
    </div>
);

const DetailText = ({title, description}) => (
    <div className={css(detail.detailText)}>
        <p className={css(detail.name)}>{title}</p>
        {description ? (
        <p className={css(detail.description)}>
            <span className={css(detail.span)}>Состав</span>
            {description}
        </p>
        ) : null}
    </div>
);

class Detail extends Component {
    componentDidMount() {
        this.props.pushGetDetailItem(this.props.params.id);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.params.id !== this.props.params.id) {
            this.props.pushGetDetailItem(this.props.params.id);
        }
    }


    render() {
        const {detailItem} = this.props.Store;
        const {
            item_image_750x480,
            item_name,
            item_description,
            item_price,
            item_size_m_price
        } = detailItem;
        return (
            <div className={css(detail.detailPage)}>
                {Object.keys(detailItem).length ? (
                    <div>
                        <DetailPicture image={item_image_750x480} />
                        <DetailText title={item_name} description={item_description} />
                        <div className={css(detail.list)}>
                            <DetailControl key={`${this.props.params.id}false`} size={false} item={detailItem} price={Number(item_price)} type={item_size_m_price ? true : false} />
                            {item_size_m_price ? <DetailControl key={`${this.props.params.id}true`} size={true} item={detailItem} price={Number(item_price) + Number(item_size_m_price)} type={item_size_m_price ? true : false} /> :null}
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