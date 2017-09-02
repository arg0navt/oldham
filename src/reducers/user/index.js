import * as ActionType from '../../config/ActionType';
import { storage } from '../../config/url';

export default function user(state = {}, action) {
  if (action.type === ActionType.PUSH_USER){
    localStorage.setItem(storage.user, JSON.stringify(action.payload));
    return action.payload;
  }
  return state;
}