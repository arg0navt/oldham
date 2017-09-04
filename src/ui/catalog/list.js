import React, {Component} from 'react';
import * as ActionType from '../../config/ActionType';
import { storage } from '../../config/url';
import {css} from 'aphrodite/no-important';
import c from '../../css/catalogPage'
import {connect} from 'react-redux';
import {getCatalogItems} from '../../queries/catalog';
import Item from '../../ui/item'

class CatalogItems extends Component {
    componentDidMount() {
        const storageItems = JSON.parse(localStorage.getItem(storage.categoryItems)) || [];
        let findCategoryId = null;
        if (storageItems) {
            findCategoryId = storageItems.find((item) => {
                return item.id === this.props.id;
            });
            if (findCategoryId) {
                this.props.pushCategoryItems(findCategoryId);
                this.props.getPushCatalogItems(this.props.id);
            } else {
                this.props.getPushCatalogItems(this.props.id);
            }
        } else {
            this.props.getPushCatalogItems(this.props.id);
        }
    }

    render() {
        const { categoryItems } = this.props.Store;
        let list = categoryItems.find((item) => {
            return item.id === this.props.id;
        });
        return (
            <div className={css(c.categoryWr)}>
                {list ? (
                    <div>
                        {list.list.map((item, index) => <Item key={index} item={item} />)}
                    </div>
                ) : null}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    Store: state,
});

const mapDispatchToProps = dispatch => ({
    pushCategoryItems: (items) => {
        dispatch({type: ActionType.PUSH_ITEMS, payload: items})
    },
    getPushCatalogItems: (id) => {
        getCatalogItems(dispatch, id)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogItems);