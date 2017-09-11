import React, {Component} from 'react';
import {connect} from 'react-redux';
import {css} from 'aphrodite/no-important';
import {browserHistory} from 'react-router';
import c from '../../css/catalogPage'
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
        let id = this.props.routes[1].childRoutes.findIndex((item, index) => {
            return item.path === this.props.routes[2].path
        });
        if (id === -1) {
            id = 0
        }
        if (activeKey === 'Пицца') {
            activeKey = 'pizza';
        }
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
                            return <TabPane key={item.tabName} tab={item.title}></TabPane>
                        })}
                    </Tabs>
                ) : null}
                <CatalogItems id={id + 1} type={activeKey}/>
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