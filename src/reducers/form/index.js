import Cookies from 'js-cookie';

export default function form(state = {}, action) {
  if (action.type === 'FORM'){
    Cookies.set('form', action.payload, { expires: 365 });
    return {...action.payload};
  } 
  return state;
}