import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_SERVER, RECEIVE_NEW_SERVER, REMOVE_SERVER } from "../actions/server_actions";
const serversListReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.payload.servers) {
        return Object.assign(nextState, action.payload.servers);
      } else {
        return {};
      }
    case RECEIVE_SERVER:
      nextState[action.payload.server.id] = action.payload.server;
      return nextState;
    case RECEIVE_NEW_SERVER:
      nextState[action.payload.server.id] = action.payload.server; 
      return nextState;
    case REMOVE_SERVER:
      return action.payload.servers
    default:
      return state;
  }
}

export default serversListReducer;