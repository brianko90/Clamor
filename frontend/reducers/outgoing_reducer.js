import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { CURRENT_USER_FRIENDS } from "../actions/friend_actions";

const friendListReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.payload.outgoing) {
        return action.payload.outgoing;
      } else {
        return {};
      }
    case CURRENT_USER_FRIENDS:
      if (action.payload.outgoing) {
        return action.payload.outgoing;
      } else {
        return {};
      }
    default:
      return state;
  }
}

export default friendListReducer;