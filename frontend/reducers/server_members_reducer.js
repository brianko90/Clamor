import { RECEIVE_SERVER } from "../actions/server_actions";

const serverMembersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_SERVER:
      if (action.payload.serverMembers) {
        return action.payload.serverMembers;
      } else {
        return {};
      }
    default:
      return state;
  }
}

export default serverMembersReducer;