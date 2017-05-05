import React, { Component } from 'react';
import {Link} from 'react-router';
import { Container, Row, Col } from 'reactstrap';
import { css } from 'aphrodite/no-important';
import global from '../../css/global';
import styleHeader from '../../css/header';

const NavButton = () => <div className={css(styleHeader.buttonNav)}></div>
const Logo = () => <Link to="/"><div className={css(styleHeader.logo)}><img className={css(global.img)} src="/img/icon/logo.png" /></div></Link>
const Shop = () => <div className={css(styleHeader.buttonShop)}><div className={css(styleHeader.numShop)}></div></div>

class Header extends Component{
    render(){
        return (
            <header className={css(styleHeader.header)}>
                <Row>
                    <Col xs="4">
                        <NavButton />
                    </Col>
                    <Col xs="4">
                        <Logo />
                    </Col>
                    <Col xs="4">
                        <Shop />
                    </Col>
                </Row>
            </header>
        )
    }
}
export default Header