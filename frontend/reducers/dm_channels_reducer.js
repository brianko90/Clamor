import {RECEIVE_CONVERSATION} from "../actions/dm_channel_actions.js";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions.js";

const dmChannelsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.payload.conversations) {
        return action.payload.conversations
      } else {
        return {};
      }
    default:
      return state;
  }
}

export default dmChannelsReducer;