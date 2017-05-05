import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router';
import { css } from 'aphrodite/no-important';
import catalog from '../../css/catalog'

const CatalogItem = ({img, icon, text, link, width}) => (
    <div className={css(catalog.itemCol)}>
        <div className={css(catalog.itemBlock)} style={{backgroundImage:'url(' + img + ')'}}>
            <div className={css(catalog.icon)}>
                <div className={css(catalog.iconWrap)}>
                    <img className={css(catalog.iconImg)} src={icon} alt={text} width={width} />
                    <p className={css(catalog.iconText)}>{text}</p>
                </div>
            </div>
        </div>
    </div>
)

export default class Slider extends Component{
    render(){
        return(
            <div className={css(catalog.catalogBlock)}>
                <Row className={css(catalog.catalogRow)}>
                    <CatalogItem img={'/img/ui/item-1.jpg'} icon={'/img/icon/food/pizza.png'} text={'пицца'} link={'/pizza'} width={42} />
                    <CatalogItem img={'/img/ui/item-2.jpg'} icon={'/img/icon/food/sushi.png'} text={'суши и роллы'} link={'/pizza'} width={50} /> 
                    <CatalogItem img={'/img/ui/item-3.jpg'} icon={'/img/icon/food/wok.png'} text={'WOK'} link={'/pizza'} width={50} /> 
                    <CatalogItem img={'/img/ui/item-4.jpg'} icon={'/img/icon/food/pasta.png'} text={'паста'} link={'/pizza'} width={43} /> 
                    <CatalogItem img={'/img/ui/item-5.jpg'} icon={'/img/icon/food/beverages.png'} text={'напитки'} link={'/pizza'} width={35} /> 
                    <CatalogItem img={'/img/ui/item-6.jpg'} icon={'/img/icon/food/snacks.png'} text={'закуски'} link={'/pizza'} width={56} /> 
                    <CatalogItem img={'/img/ui/item-7.jpg'} icon={'/img/icon/food/salad.png'} text={'салаты'} link={'/pizza'} width={55} /> 
                    <CatalogItem img={'/img/ui/item-8.jpg'} icon={'/img/icon/food/dessert.png'} text={'десерты'} link={'/pizza'} width={49} /> 
                    <CatalogItem img={'/img/ui/item-9.jpg'} icon={'/img/icon/food/sup.png'} text={'супы'} link={'/pizza'} width={55} />    
                </Row>
            </div>
        )
    }
}