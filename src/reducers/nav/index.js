export default function news(state = false, action) {
  if (action.type === 'TOGGLE_NAV'){
    return !state;
  } 
  return state;
}