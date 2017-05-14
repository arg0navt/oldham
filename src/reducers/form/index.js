export default function form(state = {}, action) {
  if (action.type === 'FORM'){
    return {...action.payload};
  } 
  return state;
}