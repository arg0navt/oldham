import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router';
import { css } from 'aphrodite/no-important';
import catalog from '../../css/catalog'
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch } from 'react-axios'
import { url, API } from '../../config/url'


const CatalogItem = ({img, icon, text, link, width}) => (
    <div className={css(catalog.itemCol)}>
        <Link className={css(catalog.link)} to={'/catalog' + link}>
        <img className={css(catalog.itemBlock, catalog.blockImage)} src={img} />
        </Link>
    </div>
)

export default class Slider extends Component{
    constructor(props){
        super(props);
        this.state = {
            url:API('Pwa','getCategories')
        }
    }
    render(){
        return(
            <div className={css(catalog.catalogBlock)}>
                    <Get url={this.state.url}>
                        {(error, response, isLoading) => {
                            if(error) {
                                return (<div>Something bad happened: {error.message}</div>)
                            } else if(response !== null) {
                                return (
                                    <div>
                                        {response.data[0].result.map((item, index) => {
                                            return(
                                                <CatalogItem icon={`http://dev.kaerus.ru/uploads/${item.catalog_image_icon}`} key={index} img={`http://dev.kaerus.ru/uploads/${item.catalog_image_340x240}`} text={item.category_name} link={
                                                    item.category_name == 'Пицца' ?
                                                        '/pizza' :
                                                    item.category_name == 'Суши и роллы' ?
                                                        '/sushi' :
                                                    item.category_name == 'Вок' ?
                                                        '/wok' :
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
                                    </div>
                                )
                            }
                            return (<div></div>)
                        }}
                    </Get>
            </div>
        )
    }
}