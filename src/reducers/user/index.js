import Cookies from 'js-cookie';
import * as ActionType from '../../config/ActionType';

export default function user(state = {}, action) {
  if (action.type === ActionType.PUSH_USER){
    Cookies.set('user', {...action.payload}, { expires: 1 });
    return {...action.payload}
  }
  return state;
}