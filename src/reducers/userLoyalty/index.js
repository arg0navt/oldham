export default function userLoyalty(state = {}, action) {
  if (action.type === 'PUSH_USER_LOYALTY'){
    return {...action.payload};
  } 
  return state;
}