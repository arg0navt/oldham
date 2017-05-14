import React, { Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import {IndexRoute, IndexRedirect,Router,Route,browserHistory} from 'react-router';
import { css } from 'aphrodite/no-important';
import global from '../../css/global';
import styleHeader from '../../css/header';

const NavButton = ({click}) => <div onClick={click} className={css(styleHeader.buttonNav)}></div>
const Logo = () => <Link to="/"><div className={css(styleHeader.logo)}><img className={css(global.img)} src="/img/icon/logo.png" /></div></Link>
const Shop = ({length}) => <div className={css(styleHeader.buttonShop)}>{length > 0 ? <div className={css(styleHeader.numShop)}></div> : <div></div>}</div>

class Header extends Component{
    render(){
        return (
            <header className={this.props.status == "hide" ? css(styleHeader.opacityHeader) : css(styleHeader.header)}>
                <Row className={this.props.status == "hide" ? css(styleHeader.hide) : css(styleHeader.row)}>
                    <Col xs="4">
                        {this.props.Store.routing.locationBeforeTransitions.pathname == '/' ? (
                            <NavButton click={this.props.toggleNav} />
                        ) : (
                            <div className={css(styleHeader.back)} onClick={browserHistory.goBack}>
                                <img className={css(styleHeader.backImg)} src="/img/icon/back.png" alt=""/>
                            </div>
                        )}
                    </Col>
                    <Col xs="4">
                        <Logo />
                    </Col>
                    <Col xs="4">
                        {this.props.Store.routing.locationBeforeTransitions.pathname != '/basket' ? (
                            <Link to="/basket"><Shop length={this.props.Store.basket.length } /></Link>
                        ) : (<div></div>)}
                    </Col>
                </Row>
                <div className={this.props.status == "hide" ? css(styleHeader.back) : css(styleHeader.hide)}>
                    <img className={css(styleHeader.backImg)} src="/img/icon/back.png" alt=""/>
                </div>
            </header>
        )
    }
}
export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({
      toggleNav: () => {
          dispatch({type:'TOGGLE_NAV'})
      }
  })
)(Header)