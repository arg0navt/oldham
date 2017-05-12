export default function price(state = 0, action) {
  if (action.type === 'PRICE'){
    return state = state + action.payload
  } else if (action.type === 'OLD_PRICE'){
      return state = state - action.payload
  } 
  return state;
}