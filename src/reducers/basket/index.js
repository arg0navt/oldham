import * as ActionType from '../../config/ActionType';

export default function basket(state = [], action) {
    if (action.type === ActionType.ADD_BASKET) {
        const findItem = state.find((item) => {
            return item.id === action.payload.id && item.size === action.payload.size;
        });
        const findNotItem = state.filter((item) => {
            return item.id !== action.payload.id && item.size !== action.payload.size;
        });
        if (findItem && findNotItem) {
            return [...findNotItem, action.payload]
        } else if (findItem && !findNotItem) {
            return [action.payload]
        } else {
            return [...state, action.payload]
        }
    }
    return state;
}