import * as ActionType from '../../config/ActionType';
import { storage } from '../../config/url';
import _ from 'underscore';

export default function basket(state = [], action) {
    if (action.type === ActionType.ADD_BASKET) {
        const findItem = _.where(state, {size: action.payload.size, id: action.payload.id});
        const findNotItem = _.difference(state, findItem);
        if (findItem && findNotItem.length) {
            localStorage.setItem(storage.basket, JSON.stringify([...findNotItem, action.payload]));
            return [...findNotItem, action.payload]
        } else if (findItem && !findNotItem.length) {
            localStorage.setItem(storage.basket, JSON.stringify([action.payload]));
            return [action.payload]
        } else {
            localStorage.setItem(storage.basket, JSON.stringify([...state, action.payload]));
            return [...state, action.payload]
        }
    } else if (action.type === ActionType.DELETE_ITEM_BASKET) {
        const findItem = _.where(state, {size: action.payload.size, id: action.payload.id});
        const findNotItem = _.difference(state, findItem);
        localStorage.setItem(storage.basket, JSON.stringify([...findNotItem]));
        return [...findNotItem];
    } else if (action.type === ActionType.ADD_ITEMS_BASKET) {
        return [...action.payload]
    }
    return state;
}