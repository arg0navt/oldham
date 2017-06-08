import Cookies from 'js-cookie';

export default function user(state = {}, action) {
  if (action.type === 'PUSH_USER'){
    Cookies.set('user', {...action.payload}, { expires: 1 });
    return {...action.payload}
  } 
  return state;
}