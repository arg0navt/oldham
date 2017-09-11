import * as ActionType from '../../config/ActionType';
import { storage } from '../../config/url';

export const category = function (state = {}, action) {
    if (action.type === ActionType.PUSH_CATEGORY){
        localStorage.setItem(storage.categoryList, JSON.stringify(action.payload));
        return action.payload;
    }
    return state;
};

export const categoryItems = function (state = [], action) {
    if (action.type === ActionType.PUSH_ITEMS){
        const items = {id: action.payload.id, list: action.payload.list};
        localStorage.setItem(storage.categoryItems, JSON.stringify([...state, items]));
        return [...state, items]
    }
    return state;
};

export const detailItem = function (state = {}, action) {
    if (action.type === ActionType.ITEM_DETAIL){
        return action.payload;
    }
    return state;
};