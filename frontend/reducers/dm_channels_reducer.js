import {RECEIVE_CONVERSATION} from "../actions/dm_channel_actions.js";

const dmChannelsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_CONVERSATION:
      return action.payload.conversationMessages
    default:
      return state;
  }
}

export default dmChannelsReducer;