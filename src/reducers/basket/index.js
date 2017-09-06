import * as ActionType from '../../config/ActionType';
import _ from 'underscore';

export default function basket(state = [], action) {
    if (action.type === ActionType.ADD_BASKET) {
        const findItem = _.where(state, {size: action.payload.size, id: action.payload.id});
        const findNotItem = _.difference(state, findItem);
        if (findItem && findNotItem.length) {
            return [...findNotItem, action.payload]
        } else if (findItem && !findNotItem.length) {
            return [action.payload]
        } else {
            return [...state, action.payload]
        }
    } else if (action.type === ActionType.DELETE_ITEM_BASKET) {
        const findItem = _.where(state, {size: action.payload.size, id: action.payload.id});
        const findNotItem = _.difference(state, findItem);
        return [...findNotItem];
    }
    return state;
}