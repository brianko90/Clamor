import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const serversListReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  console.log(action.payload)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      // nextState['servers'] = action.payload.servers;
      // nextState['owned_servers'] = action.payload.owned_servers
      return action.payload.servers;
    default:
      return state;
  }
}

export default serversListReducer;