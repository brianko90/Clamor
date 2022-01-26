import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const incomingReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.payload.incoming) {
        return Object.assign(nextState, action.payload.incoming);
      } else {
        return {};
      }
    default:
      return state;
  }
}

export default incomingReducer;