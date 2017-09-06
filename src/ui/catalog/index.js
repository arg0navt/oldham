import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import { css } from 'aphrodite/no-important';
import catalog from '../../css/catalog';

const CatalogItem = ({img, icon, text, link, width}) => (
    <div className={css(catalog.itemCol)}>
        <Link className={css(catalog.link)} to={'/catalog' + link}>
        <img className={css(catalog.itemBlock, catalog.blockImage)} src={img} alt="" />
        </Link>
    </div>
);

class Slider extends Component{
    render(){
        const { category } = this.props.Store;
        return(
            <div className={css(catalog.catalogBlock)}>
                {category.length ? (
                    <div>
                        {category.map((item, index) => {
                            let link = '';
                            if (item.category_name === 'Пицца') {
                                link = '/pizza';
                            } else if (item.category_name === 'Суши и роллы') {
                                link = '/sushi';
                            } else if (item.category_name === 'Вок') {
                                link = '/wok';
                            } else if (item.category_name === 'Паста') {
                                link = '/pasta';
                            } else if (item.category_name === 'Напитки') {
                                link = '/beverages';
                            } else if (item.category_name === 'Закуски') {
                                link = '/snacks';
                            } else if (item.category_name === 'Салаты') {
                                link = '/salad';
                            } else if (item.category_name === 'Десерты') {
                                link = '/dessert';
                            } else if (item.category_name === 'Супы') {
                                link = '/sup';
                            }
                            return (
                                <CatalogItem icon={`http://dev.kaerus.ru/uploads/${item.catalog_image_icon}`} key={index} img={`http://dev.kaerus.ru/uploads/${item.catalog_image_340x240}`} text={item.category_name} link={link} />
                            )
                        })}
                    </div>
                ) : null}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    Store: state
});

export default connect(mapStateToProps)(Slider)