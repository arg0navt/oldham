export default function token(state = '', action) {
  if (action.type === 'PUSH_TOKEN'){
    return action.payload;
  } 
  return state;
}