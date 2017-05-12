export default function basket(state = [], action) {
  if (action.type === 'ADD_BASKET'){
    return [...state, action.payload]
  }
  return state;
}