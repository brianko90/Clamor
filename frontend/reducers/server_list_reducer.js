import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_SERVER } from "../actions/server_actions";
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
      // nextState['servers'] = action.payload.servers;
      // nextState['owned_servers'] = action.payload.owned_servers
      // return action.payload.servers;
    case RECEIVE_SERVER:
      return Object.assign(nextState, action.payload.servers)
    default:
      return state;
  }
}

export default serversListReducer;