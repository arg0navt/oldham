import * as ActionType from '../../config/ActionType';

export default function userLoyalty(state = {}, action) {
  if (action.type === ActionType.PUSH_USER_LOYALTY){
    return {...action.payload};
  } 
  return state;
}