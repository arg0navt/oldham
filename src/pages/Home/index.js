import React, { Component } from 'react';
import Slider from '../../ui/slider'
import Catalog from '../../ui/catalog'
import Card from '../../ui/card'

export default class Home extends Component{
    render(){
        return (
            <div>
                <Slider />
                <Card />
                <Catalog />
            </div>
        )
    }
}