import * as ActionType from '../../config/ActionType';

export default function token(state = '', action) {
    if (action.type === ActionType.PUSH_TOKEN){
        return action.payload;
    }
    return state;
}