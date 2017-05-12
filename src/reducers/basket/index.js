import _ from 'underscore'

export default function basket(state = [], action) {
  if (action.type === 'ADD_BASKET'){
    return [...state, action.payload]
  } else if (action.type === 'MORE'){
    const n = _.findLastIndex(state, function(item){ return item.item_id == action.payload.item_id; })
    let i = 1
    if (state[n].call == undefined){
      state[n] = {call:i + 1, ...state[n]}
    } else {
      state[n] = {...state[n], call:state[n].call + 1}
    }
    return [...state]
  } else if (action.type === 'SUB'){
    const n = _.findLastIndex(state, function(item){ return item.item_id == action.payload.item_id; })
    console.log(n)
    if (state[n].call != undefined || state[n].call != 1){
      state[n] = {...state[n], call:state[n].call - 1}
    } else {
      return [...state]
    }
    return [...state]
  }
  return state;
}