import * as ActionType from '../../config/ActionType';
import { storage } from '../../config/url';

export default function userLoyalty(state = {}, action) {
  if (action.type === ActionType.PUSH_USER_LOYALTY){
    localStorage.setItem(storage.loyalty, JSON.stringify(action.payload));
    return action.payload;
  } 
  return state;
}