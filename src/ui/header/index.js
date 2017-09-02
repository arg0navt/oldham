import React, { Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { IndexRoute, IndexRedirect, Router,Route, browserHistory } from 'react-router';
import { urlList } from '../../config/url';
import { css } from 'aphrodite/no-important';
import global from '../../css/global';
import * as ActionType from '../../config/ActionType';
import styleHeader from '../../css/header';

const NavButton = ({click}) => <div onClick={click} className={css(styleHeader.buttonNav)}></div>
const Logo = () => <Link to="/"><div className={css(styleHeader.logo)}></div></Link>
const Shop = ({length}) => <div className={css(styleHeader.buttonShop)}>{length > 0 ? <div className={css(styleHeader.numShop)}></div> : <div></div>}</div>
const Back = () => (
    <div className={css(styleHeader.back)} onClick={browserHistory.goBack}>
        <img className={css(styleHeader.backImg)} src={`${process.env.PUBLIC_URL}/img/icon/back.png`} alt=""/>
    </div>
);
class Header extends Component {
    render(){

        const { pathname } = this.props.Store.routing.locationBeforeTransitions;
        const { status } = this.props;
        const { basket } = this.props.Store;

        return (
            <header className={status === "hide" ? css(styleHeader.opacityHeader) : css(styleHeader.header)}>
                <Row className={status === "hide" ? css(styleHeader.hide) : css(styleHeader.row)}>
                    <Col xs="4">
                        {pathname === urlList.index ? (
                            <NavButton click={this.props.toggleNav} />
                        ) : (
                            <Back />
                        )}
                    </Col>
                    <Col xs="4">
                        <Logo />
                    </Col>
                    <Col xs="4">
                        {pathname !== urlList.basket ? (
                            <Link to={urlList.basket}><Shop length={basket.length } /></Link>
                        ) : null}
                    </Col>
                </Row>
                <div className={status === "hide" ? css(styleHeader.back) : css(styleHeader.hide)}>
                    <img className={css(styleHeader.backImg)} src={`${process.env.PUBLIC_URL}/img/icon/back.png`} alt=""/>
                </div>
            </header>
        )
    }
}

const mapStateToProps = state => ({
    Store: state
});

const mapDispatchToProps = dispatch => ({
    toggleNav: () => {
        dispatch({type:ActionType.TOGGLE_NAV})
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)