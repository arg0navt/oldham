import * as ActionType from '../../config/ActionType';

export default function user(state = {}, action) {
  if (action.type === ActionType.PUSH_USER){
    localStorage.setItem('user', JSON.stringify(action.payload));
    return action.payload;
  }
  return state;
}