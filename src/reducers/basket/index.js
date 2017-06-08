import _ from 'underscore'
import Cookies from 'js-cookie';

export default function basket(state = [], action) {
  if (action.type === 'ADD_BASKET'){
    Cookies.set('basket', [...state, action.payload], { expires: 1 });
    return [...state, action.payload]
  } else if (action.type === 'MORE'){
    const n = _.findLastIndex(state, function(item){ return item.item_id == action.payload.item_id && item.width == action.payload.width; })
    let i = 1
    if (state[n].call == undefined){
      state[n] = {call:i + 1, ...state[n]}
    } else {
      state[n] = {...state[n], call:state[n].call + 1}
    }
    Cookies.set('basket', state, { expires: 1 });
    return [...state]
  } else if (action.type === 'SUB'){
    const n = _.findLastIndex(state, function(item){ return item.item_id == action.payload.item_id && item.width == action.payload.width; })
    if (state[n].call != undefined || state[n].call != 1){
      state[n] = {...state[n], call:state[n].call - 1}
    } else {
      return [...state]
    }
    Cookies.set('basket', state, { expires: 1 });
    return [...state]
  } else if (action.type === 'MORE40'){
    const n = _.findLastIndex(state, function(item){ return item.item_id == action.payload.item_id && item.width == action.payload.width; })
    let i = 1
    if (state[n].call == undefined){
      state[n] = {call:i + 1, ...state[n]}
    } else {
      state[n] = {...state[n], call:state[n].call + 1}
    }
    Cookies.set('basket', state, { expires: 1 });
    return [...state]
  } else if (action.type === 'SUB40'){
    const n = _.findLastIndex(state, function(item){ return item.item_id == action.payload.item_id && item.width == action.payload.width; })
    if (state[n].call != undefined || state[n].call != 1){
      state[n] = {...state[n], call:state[n].call - 1}
    } else {
      return [...state]
    }
    Cookies.set('basket', state, { expires: 1 });
    return [...state]
  } else if (action.type === 'DELETE'){
    const n = _.where(state, {width: action.payload.width, item_id: action.payload.item_id})
    var newState = _.difference(state, n)
    Cookies.set('basket', newState, { expires: 1 });
    return newState
  }
  return state;
}