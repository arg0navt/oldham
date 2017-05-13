export default function price(state = 0, action) {
  if (action.type === 'PRICE'){
    return action.payload;
  } 
  return state;
}