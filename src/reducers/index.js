import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import nav from './nav';
import basket from './basket';
import price from './price';
import form from './form';
import token from './token';
import user from './user';
import userLoyalty from './userLoyalty';
import actions from './actions';
import {category, categoryItems, detailItem} from './category';

export default combineReducers({
    routing: routerReducer,
    nav,
    category,
    categoryItems,
    detailItem,
    actions,
    basket,
    price,
    form,
    token,
    user,
    userLoyalty
});
