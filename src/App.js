import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import AppCss from './css/AppStyle';
import global from './css/global';
import { Container, Row, Col } from 'reactstrap';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import {IndexRoute, IndexRedirect,Router,Route,browserHistory} from 'react-router';
import Home from './pages/Home'
import Header from './ui/header'
import BottomPanel from './ui/bottomPanel'
import './fonts/GothamPro/styles.css'
import './fonts/GothamPro-Medium/styles.css'
import './fonts/GothamPro-Bold/styles.css'

class App extends Component {
  render() {
    return (
      <div className={css(AppCss.App)}>
        <Header />
        <section className={css(global.content)}>
          <Router history={browserHistory}>
            <Route path="/" component={Home} />
          </Router>
        </section>
        <BottomPanel />
      </div>
    );
  }
}
export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({})
)(App)