import React, {Component} from 'react';
import {connect} from 'react-redux';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import Home from './pages/Home';
import AppWrap from './ui/AppWrap';
import Catalog from './pages/Catalog';
import Detail from './pages/Detail';
import Basket from './pages/Basket';
import Order from './pages/Order';
import Contact from './pages/Contact';
import Delivery from './pages/Delivery';
import Guarantees from './pages/Guarantees';
import Payment from './pages/Payment';
import Shares from './pages/Shares';
import SharesDetail from './pages/SharesDetail';
import End from './pages/End';
import EndRegistration from './pages/EndRegistration';
import ComeIn from './pages/ComeIn';
import Login from './pages/Login';
import Registration from './pages/Registartion';
import User from './pages/User';
import './fonts/GothamPro/styles.css';
import './fonts/GothamPro-Medium/styles.css';
import './fonts/GothamPro-Bold/styles.css';
import './fonts/GothamPro-Italic/styles.css';
import {titleList, urlList, storage} from './config/url';
import * as ActionType from './config/ActionType';
import { getToken, getLoyalty } from './queries/user';
import { getActions } from './queries/actions';
import { getCatalogCategoty } from './queries/catalog';

const routes = (
    <Route path={urlList.index} component={AppWrap}>
        <IndexRoute component={Home}/>
        <Route path={urlList.catalog} component={Catalog}>
            <IndexRoute title={titleList.pizza} tabName={titleList.pizza} component={Catalog} />
            <Route path={urlList.pizza} title={titleList.pizza} tabName={'pizza'} component={Catalog}></Route>
            <Route path={urlList.sushi} title={titleList.sushi} tabName={'sushi'} component={Catalog}></Route>
            <Route path={urlList.wok} title={titleList.wok} tabName={'wok'} component={Catalog}></Route>
            <Route path={urlList.pasta} title={titleList.pasta} tabName={'pasta'} component={Catalog}></Route>
            <Route path={urlList.beverages} title={titleList.beverages} tabName={'beverages'} component={Catalog}></Route>
            <Route path={urlList.snacks} title={titleList.snacks} tabName={'snacks'} component={Catalog}></Route>
            <Route path={urlList.salad} title={titleList.salad} tabName={'salad'} component={Catalog}></Route>
            <Route path={urlList.dessert} title={titleList.dessert} tabName={'dessert'} component={Catalog}></Route>
            <Route path={urlList.soup} title={titleList.soup} tabName={'soup'} component={Catalog}></Route>
        </Route>
        <Route path={urlList.detail} component={Detail}></Route>
        <Route path={urlList.basket} component={Basket}></Route>
        <Route path={urlList.order} component={Order}></Route>
        <Route path={urlList.contact} component={Contact}></Route>
        <Route path={urlList.guarantees} component={Guarantees}></Route>
        <Route path={urlList.delivery} component={Delivery}></Route>
        <Route path={urlList.payment} component={Payment}></Route>
        <Route path={urlList.shares} component={Shares}></Route>
        <Route path={urlList.shareDetail} component={SharesDetail}></Route>
        <Route path={urlList.end} component={End}></Route>
        <Route path={urlList.endregistration} component={EndRegistration}></Route>
        <Route path={urlList.comein} component={ComeIn}></Route>
        <Route path={urlList.login} component={Login}></Route>
        <Route path={urlList.registration} component={Registration}></Route>
        <Route path={urlList.user} component={User}></Route>
    </Route>
);

class App extends Component {
    componentDidMount() {
        const localStorageObj = {
            user: JSON.parse(localStorage.getItem(storage.user)) || {},
            loyalty: JSON.parse(localStorage.getItem(storage.loyalty)) || {} ,
            actions: JSON.parse(localStorage.getItem(storage.actions)) || [],
            catalogList: JSON.parse(localStorage.getItem(storage.categoryList)) || [],
        };

        if (!this.props.Store.token && Object.keys(localStorageObj.user).length) {
            this.props.pushUser({...localStorageObj.user});
            this.props.pushToken(localStorageObj.user.user_token);
            if (Object.keys(localStorageObj.loyalty).length) {
                this.props.userLoyalty(localStorageObj.loyalty);
            } else {
                this.props.getUserLoyalty(localStorageObj.user.user_token, this.props.token);
            }
        } else {
            this.props.token();
        }

        if (Object.keys(localStorageObj.actions).length) {
            this.props.pushActions(localStorageObj.actions);
            this.props.getPushActions();
        } else {
            this.props.getPushActions()
        }

        if (Object.keys(localStorageObj.catalogList).length) {
            this.props.pushCatalogCategoty(localStorageObj.catalogList);
            this.props.getPushCatalogCategoty()
        } else {
            this.props.getPushCatalogCategoty()
        }
    }

    render() {
        return (
            <Router history={browserHistory}>
                {routes}
            </Router>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    token: () => {
        getToken(dispatch);
    },
    pushToken: item => {
        dispatch({type: ActionType.PUSH_TOKEN, payload: item});
    },
    pushUser: item => {
        dispatch({type: ActionType.PUSH_USER, payload: item});
    },
    getUserLoyalty: (token, callback) => {
        getLoyalty(dispatch, token, callback);
    },
    userLoyalty: items => {
        dispatch({type: ActionType.PUSH_USER_LOYALTY, payload: items});
    },
    getPushActions: () => {
        getActions(dispatch);
    },
    pushActions: items => {
        dispatch({type: ActionType.PUSH_ACTIONS, payload: items});
    },
    pushCatalogCategoty: items => {
        dispatch({type: ActionType.PUSH_CATEGORY, payload: items});
    },
    getPushCatalogCategoty: () => {
        getCatalogCategoty(dispatch)
    }
});

const mapStateToProps = state => ({
    Store: state
});

export default connect(mapStateToProps, mapDispatchToProps)(App)