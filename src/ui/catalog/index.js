import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router';
import { css } from 'aphrodite/no-important';
import catalog from '../../css/catalog'
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch } from 'react-axios'
import { url } from '../../config/url'


const CatalogItem = ({img, icon, text, link, width}) => (
    <Col xs="6" className={css(catalog.itemCol)}>
        <Link to={'/catalog' + link}>
        <div className={css(catalog.itemBlock)} style={{backgroundImage:'url(' + img + ')'}}>
            <div className={css(catalog.icon)}>
                <div className={css(catalog.iconWrap)}>
                    <p className={css(catalog.iconText)}>{text}</p>
                </div>
            </div>
        </div>
        </Link>
    </Col>
)

export default class Slider extends Component{
    render(){
        return(
            <div className={css(catalog.catalogBlock)}>
                <Row className={css(catalog.catalogRow)}>
                    <Get url={`${url.url}?commands=[{%22data%22:{%22client_id%22:%22${url.userId}%22,%22platform%22:%221%22}}]`}>
                        {(error, response, isLoading) => {
                            if(error) {
                                return (<div>Something bad happened: {error.message}</div>)
                            } else if(response !== null) {
                                return (
                                    <Row>
                                        {response.data[0].result.map((item, index) => {
                                            return(
                                                <CatalogItem key={index} img={`http://dev.kaerus.ru/uploads/${item.category_image}`} text={item.category_name} link={
                                                    item.category_name == 'Пицца' ?
                                                        '/pizza' :
                                                    item.category_name == 'Суши и роллы' ?
                                                        '/sushi' :
                                                    item.category_name == 'Вок' ?
                                                        '/woki' :
                                                    item.category_name == 'Паста' ?
                                                        '/pasta' :
                                                    item.category_name == 'Напитки' ?
                                                        '/beverages' :
                                                    item.category_name == 'Закуски' ?
                                                        '/snacks' :  
                                                    item.category_name == 'Салаты' ?
                                                        '/salad' :
                                                    item.category_name == 'Десерты' ?
                                                        '/dessert' :
                                                    item.category_name == 'Супы' ?
                                                        '/sup' : ''                                 
                                                } />
                                            )
                                        })}
                                    </Row>
                                )
                            }
                            return (<div></div>)
                        }}
                    </Get>
                        
                </Row>
            </div>
        )
    }
}