
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
const serversReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return nextState['server_memberships'] = action.payload.server_memberships;
    default:
      return state;
  }
}

export default serversReducer;