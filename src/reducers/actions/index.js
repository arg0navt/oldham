import * as ActionType from '../../config/ActionType';

export const actions = function(state = [], action) {
    if (action.type === ActionType.PUSH_ACTIONS){
        localStorage.setItem('actions', JSON.stringify(action.payload));
        return action.payload;
    }
    return state;
};

export const actionsDetail = function(state = {}, action) {
    if (action.type === ActionType.PUSH_DETAIL_ACTIONS){
        return action.payload;
    }
    return state;
};