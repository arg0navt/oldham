import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import nav from './nav'
import basket from './basket'
import price from './price'
import form from './form'

export default combineReducers({
    routing: routerReducer,
    nav,
    basket,
    price,
    form
})