import * as ActionType from '../../config/ActionType';
import { Map } from 'immutable';

const initialState = Map({});

export default function user(state = initialState, action) {
  if (action.type === ActionType.PUSH_USER){
    localStorage.setItem('user', JSON.stringify(action.payload));
    return state.merge(Map(action.payload));
  }
  return state;
}