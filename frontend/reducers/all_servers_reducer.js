import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_SERVERS} from "../actions/server_actions";

const serversAllReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_SERVERS:
      if (action.servers) {
        return action.servers
      } else {
        return {};
      }
    default:
      return state;
  }
}

export default serversAllReducer;