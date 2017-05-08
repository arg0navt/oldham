import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router';
import { css } from 'aphrodite/no-important';
import slider from '../../css/slider'
import Swiper from 'react-id-swiper'

const params = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 30
}
const SlideItem = ({img, text}) => (
    <div className={css(slider.slide)}>
        <div className={css(slider.blockImg)} style={{backgroundImage:'url(' + img + ')'}}></div>
        <div className={css(slider.blockText)}>
            <Row>
                <Col xs="5">
                    <p className={css(slider.sliderText)}>{text}</p>
                </Col>
                <Col xs="5" className={css(slider.rightBlock)}>
                    <Link to='/page' className={css(slider.sliderLink)}>Все акции</Link>
                </Col>
            </Row>
        </div>
    </div>
)

export default class Slider extends Component{
    render(){
        return(
            <div className={css(slider.sliderWrap)}>
                <Swiper {...params}>
                    <div className="item"><SlideItem img={'/img/picher/slider.jpg'} text={'Доставим за 40 минут или бесплатно!'} /></div>
                    <div className="item"><SlideItem img={'/img/picher/slider.jpg'} text={'Доставим за 40 минут или бесплатно!'} /></div>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
}