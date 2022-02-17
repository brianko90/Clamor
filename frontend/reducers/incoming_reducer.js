import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { CURRENT_USER_FRIENDS } from "../actions/friend_actions";

const incomingReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.payload.incoming) {
        return action.payload.incoming;
      } else {
        return {};
      }
    case CURRENT_USER_FRIENDS:
      if (action.payload.incoming) {
        return action.payload.incoming;
      } else {
        return {};
      }
    default:
      return state;
  }
}

export default incomingReducer;