import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import Header from '../header'
import Navigation from '../navigation'
import { connect } from 'react-redux';
import AppCss from '../../css/AppStyle';
import global from '../../css/global';
import CatalogPanel from '../../ui/catalogPanel'

class AppWrap extends Component{
  render(){
    return(
      <div className={css(AppCss.App)}>
        <div  className={css(AppCss.content)}>
        <Header status={this.props.params.goods === 'goods' ? 'hide' : ''} />
        <Navigation />
        <section className={this.props.Store.basket.length > 0 ? css(global.content, global.contentPadding) : css(global.content)}>
            {this.props.children}
        </section>
        <CatalogPanel location={this.props.location} />
        </div>
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