import React, {Component} from 'react';
import * as ActionType from '../../config/ActionType';
import { storage } from '../../config/url';
import {css} from 'aphrodite/no-important';
import c from '../../css/catalogPage'
import {connect} from 'react-redux';
import {getCatalogItems} from '../../queries/catalog';
import Item from '../../ui/item'

class CatalogItems extends Component {
    constructor(props){
        super(props);
        this.rerenderComponent = this.rerenderComponent.bind(this);
    }

    rerenderComponent(id) {
        const storageItems = JSON.parse(localStorage.getItem(storage.categoryItems)) || [];
        let findCategoryId = null;
        if (storageItems) {
            findCategoryId = storageItems.find((item) => {
                return item.id === id;
            });
            if (findCategoryId) {
                this.props.pushCategoryItems(findCategoryId);
                this.props.getPushCatalogItems(id);
            } else {
                this.props.getPushCatalogItems(id);
            }
        } else {
            this.props.getPushCatalogItems(id);
        }
    }

    componentDidMount() {
        this.rerenderComponent(this.props.id);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.id !== this.props.id){
            this.rerenderComponent(nextProps.id)
        }
    }

    render() {
        let list = this.props.Store.categoryItems.find((item) => {
            return item.id === this.props.id;
        });
        return (
            <div className={css(c.categoryWr)}>
                {list ? (
                    <div>
                        {list.list.map((item, index) => <Item key={item.item_id} item={item} type={this.props.type} />)}
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
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogItems);