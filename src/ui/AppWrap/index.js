import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import Header from '../header'
import Navigation from '../navigation'
import BottomPanel from '../bottomPanel'
import { Container, Row, Col } from 'reactstrap';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import {IndexRoute, IndexRedirect,Router,Route,browserHistory} from 'react-router';
import AppCss from '../../css/AppStyle';
import global from '../../css/global';
import CatalogPanel from '../../ui/catalogPanel'

class AppWrap extends Component{
  render(){
    return(
      <div className={css(AppCss.App)}>
        <Header status={this.props.params.goods == 'goods' ? 'hide' : ''} />
        <Navigation />
        <section className={this.props.Store.basket.length > 0 ? css(global.content, global.contentPadding) : css(global.content)}>
            {this.props.children}
        </section>
        <CatalogPanel />
      </div>
    )
  }
}
export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({})
)(AppWrap)