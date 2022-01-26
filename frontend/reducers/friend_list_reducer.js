import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const friendListReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.payload.servers) {
        return Object.assign(nextState, action.payload.friends);
      } else {
        return {};
      }
    default:
      return state;
  }
}

export default friendListReducer;