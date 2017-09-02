import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import { css } from 'aphrodite/no-important';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch } from 'react-axios'
import { url, API } from '../../config/url'
import slider from '../../css/slider'
import Swiper from 'react-id-swiper'

const params = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 30,
    lazyLoading: true
};

const SlideItem = ({img, text, id}) => (
    <div className={css(slider.slide)}>
        <Link to={`/share_detail?code=${id}`}><div className={css(slider.blockImg)} style={{backgroundImage:'url(' + img + ')'}}></div></Link>
        <div className={css(slider.blockText)}>
            <Row>
                <Col xs="5">
                    <Link to={`/share_detail?code=${id}`}><p className={css(slider.sliderText)}><span>{text}</span></p></Link>
                </Col>
                <Col xs="5" className={css(slider.rightBlock)}>
                    <Link to='/shares' className={css(slider.sliderLink)}>Все акции</Link>
                </Col>
            </Row>
        </div>
    </div>
);

class Slider extends Component{
    render(){
        const { actions } = this.props.Store;
        return(
            <div className={css(slider.sliderWrap)}>
                {Object.keys(actions).length ? (
                    <Swiper {...params}>
                        {actions.map((item, index) => {
                            return(<div key={index} className="item"><SlideItem img={`http://dev.kaerus.ru/uploads/${item.action_image_s}`} id={item.action_id} text={`${item.action_title}`} /></div>)
                        })}
                    </Swiper>
                ) : null}
                <div className="swiper-pagination"></div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    Store: state
});

export default connect(mapStateToProps)(Slider);