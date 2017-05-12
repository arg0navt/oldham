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
import './fonts/GothamPro/styles.css'
import './fonts/GothamPro-Medium/styles.css'
import './fonts/GothamPro-Bold/styles.css'
import './fonts/GothamPro-Italic/styles.css'
import Swipe from 'react-swipe-component';

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
  </Route>
)

class App extends Component {
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
  dispatch =>({})
)(App)