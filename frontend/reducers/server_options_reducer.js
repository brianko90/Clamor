

const serverOptionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_SERVERS:
      debugger
      return action.payload
    default:
      return state;
  }
}

export default serverOptionsReducer;