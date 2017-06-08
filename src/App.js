import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import AppCss from './css/AppStyle';
import global from './css/global';
import { Container, Row, Col } from 'reactstrap';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import {IndexRoute, IndexRedirect,Router,Route,browserHistory} from 'react-router';
import Home from './pages/Home'
import AppWrap from './ui/AppWrap'
import Catalog from './pages/Catalog'
import Detail from './pages/Detail'
import Basket from './pages/Basket'
import Order from './pages/Order'
import Contact from './pages/Contact'
import Delivery from './pages/Delivery'
import Guarantees from './pages/Guarantees'
import Payment from './pages/Payment'
import Shares from './pages/Shares'
import SharesDetail from './pages/SharesDetail'
import End from './pages/End'
import EndRegistration from './pages/EndRegistration'
import ComeIn from './pages/ComeIn'
import Login from './pages/Login'
import Registration from './pages/Registartion'
import User from './pages/User'
import './fonts/GothamPro/styles.css'
import './fonts/GothamPro-Medium/styles.css'
import './fonts/GothamPro-Bold/styles.css'
import './fonts/GothamPro-Italic/styles.css'
import Swipe from 'react-swipe-component';
import axios  from 'axios';
import { url, API } from './config/url'
import cookie from 'react-cookies' 

const routes = (
  <Route path="/" component={AppWrap}>
    <IndexRoute component={Home} />
    <Route path="/catalog" component={Catalog}>
      <Route path="/catalog/pizza" title={'Пицца'} component={Catalog}></Route>
      <Route path="/catalog/sushi" title={'Суши и роллы'} component={Catalog}></Route>
      <Route path="/catalog/wok" title={'Wok'} component={Catalog}></Route>
      <Route path="/catalog/pasta" title={'Паста'} component={Catalog}></Route>
      <Route path="/catalog/beverages" title={'Напитки'} component={Catalog}></Route>
      <Route path="/catalog/snacks" title={'Закуски'} component={Catalog}></Route>
      <Route path="/catalog/salad" title={'Салаты'} component={Catalog}></Route>
      <Route path="/catalog/dessert" title={'Десерты'} component={Catalog}></Route>
      <Route path="/catalog/sup" title={'Супы'} component={Catalog}></Route>
    </Route>
    <Route path="/:type/:categogy/:goods" component={Detail}></Route>
    <Route path="/basket" component={Basket}></Route>
    <Route path="/order" component={Order}></Route>
    <Route path="/contact" component={Contact}></Route>
    <Route path="/guarantees" component={Guarantees}></Route>
    <Route path="/delivery" component={Delivery}></Route>
    <Route path="/payment" component={Payment}></Route>
    <Route path="/shares" component={Shares}></Route>
    <Route path="/share_detail" component={SharesDetail}></Route>
    <Route path="/end" component={End}></Route>
    <Route path="/endregistration" component={EndRegistration}></Route>
    <Route path="/comein" component={ComeIn}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/registration" component={Registration}></Route>
    <Route path="/user" component={User}></Route>
  </Route>
)

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      urlToken:API('Auth','getTokenWithoutAuth'),
    }
  }
  componentDidMount(){
    if (cookie.load('user') != undefined){
      this.props.userObj({...cookie.load('user')})
      axios.get(API('Loyalty','get', `%22token%22:%22${cookie.load('user').user_token}%22`))
      .then((response) => {
        if (response.data[0].error == undefined){
          this.props.userLoyalty(response.data[0].result)
        } else {
          this.props.userObj({})
          axios.get(this.state.urlToken)
          .then((response) => {
            this.props.token(response.data[0].result.user_token)
          }).catch((error) => {console.log(error)})
        }
      }).catch((error) => {console.log(error)})
      this.props.token(cookie.load('user').user_token)
    }
    if (this.props.Store.token == '' && cookie.load('user') == undefined){
      axios.get(this.state.urlToken)
      .then((response) => {
        this.props.token(response.data[0].result.user_token)
      }).catch((error) => {console.log(error)})
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
export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({
    token: (item) => {dispatch({type:'PUSH_TOKEN', payload:item})},
    userObj: (item) => {dispatch({type:'PUSH_USER', payload:item})},
    userLoyalty: (item) => {dispatch({type:'PUSH_USER_LOYALTY', payload:item})}
  })
)(App)