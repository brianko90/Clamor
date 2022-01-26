import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { CURRENT_USER_SERVERS } from "../actions/user_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { [action.payload.user.id]: action.payload.user };
    case CURRENT_USER_SERVERS:
      return { [action.payload.user.id]: action.payload.user };
    default:
      return state;
  }
}

export default usersReducer;