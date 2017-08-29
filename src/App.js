import React, {Component} from 'react';
import {css} from 'aphrodite/no-important';
import AppCss from './css/AppStyle';
import global from './css/global';
import {Container, Row, Col} from 'reactstrap';
import {createStore} from 'redux';
import {connect} from 'react-redux';
import {IndexRoute, IndexRedirect, Router, Route, browserHistory} from 'react-router';
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
import {url, API, titleList, urlList} from './config/url';
import * as ActionType from './config/ActionType';
import UserHOC from './queries/user';

const routes = (
    <Route path={urlList.index} component={AppWrap}>
        <IndexRoute component={Home}/>
        <Route path={urlList.catalog} component={Catalog}>
            <Route path={urlList.pizza} title={titleList.pizza} component={Catalog}></Route>
            <Route path={urlList.sushi} title={titleList.sushi} component={Catalog}></Route>
            <Route path={urlList.wok} title={titleList.wok} component={Catalog}></Route>
            <Route path={urlList.pasta} title={titleList.pasta} component={Catalog}></Route>
            <Route path={urlList.beverages} title={titleList.beverages} component={Catalog}></Route>
            <Route path={urlList.snacks} title={titleList.snacks} component={Catalog}></Route>
            <Route path={urlList.salad} title={titleList.salad} component={Catalog}></Route>
            <Route path={urlList.dessert} title={titleList.dessert} component={Catalog}></Route>
            <Route path={urlList.soup} title={titleList.soup} component={Catalog}></Route>
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
    constructor(props) {
        super(props);
        this.state = {
            urlToken: API('Auth', 'getTokenWithoutAuth'),
        }
    }

    componentDidMount() {
        const localStorageUser = JSON.parse(localStorage.getItem('user'));

        if (!this.props.Store.token && Object.keys(localStorageUser).length) {
            this.props.userObj({...localStorageUser});
            this.props.token(localStorageUser.user_token);
            this.props.getLoyalty(this.props.getToken, localStorageUser.user_token);
        } else {
            this.props.getToken();
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
    token: (item) => {
        dispatch({type: ActionType.PUSH_TOKEN, payload: item})
    },
    userObj: (item) => {
        dispatch({type: ActionType.PUSH_USER, payload: item})
    },
    userLoyalty: (item) => {
        dispatch({type: ActionType.PUSH_USER_LOYALTY, payload: item})
    }
});

const mapStateToProps = state => ({
    Store: state
});

export default connect(mapStateToProps, mapDispatchToProps)(UserHOC(App))