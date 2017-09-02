import * as ActionType from '../../config/ActionType';

export default function actions(state = [], action) {
    if (action.type === ActionType.PUSH_ACTIONS){
        localStorage.setItem('actions', JSON.stringify(action.payload));
        return action.payload;
    }
    return state;
}