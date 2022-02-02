import { CURRENT_USER_FRIENDS } from "../actions/friend_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { CURRENT_USER_SERVERS } from "../actions/user_actions";
import { RECEIVE_NEW_SERVER } from "../actions/server_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { [action.payload.user.id]: action.payload.user };
    case CURRENT_USER_SERVERS:
      return { [action.payload.user.id]: action.payload.user };
    case CURRENT_USER_FRIENDS:
      return { [action.payload.user.id]: action.payload.user };
    // case RECEIVE_NEW_SERVER:
    //   nextState["servers"].push(action.payload.server)
    //   return { [action.payload.user.id]: action.payload.user };
    default:
      return state;
  }
}

export default usersReducer;