import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {css} from 'aphrodite/no-important';
import {browserHistory} from 'react-router';
import c from '../../css/catalogPage'
import global from '../../css/global'
import Item from '../../ui/item'
import {url} from '../../config/url'
import 'rc-tabs/assets/index.css';
import '../../../public/css/fb.css';
import Tabs, {TabPane} from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import SwipeableInkTabBar from 'rc-tabs/lib/SwipeableInkTabBar';
import CatalogItems from '../../ui/catalog/list';

class Catalog extends Component {
    onChange = (key) => {
        browserHistory.push(`/catalog/${key}`);
    };
    render() {
        let activeKey = this.props.routes[2].tabName;
        return (
            <div className={css(c.catalogWrap)}>
                {this.props.route.childRoutes ? (
                    <Tabs
                        activeKey={activeKey}
                        onChange={this.onChange}
                        renderTabBar={() => <SwipeableInkTabBar
                            pageSize={3}
                            speed={1}
                        />}
                        renderTabContent={() => <TabContent/>}
                    >
                        {this.props.route.childRoutes.map((item, index) => {
                            return <TabPane key={item.tabName} tab={item.title}><CatalogItems id={index + 1}/></TabPane>
                        })}
                    </Tabs>
                ) : null}
            </div>
        );
    }
}
export default connect(
    state => ({
        Store: state
    }),
    dispatch => ({
        addBasket: (item) => {
            dispatch({type: 'ADD_BASKET', payload: item})
        },
        price: (price) => {
            dispatch({type: 'PRICE', payload: price})
        }
    })
)(Catalog)