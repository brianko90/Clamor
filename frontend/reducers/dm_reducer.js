import { RECEIVE_DM, RECEIVE_DMS } from "../actions/direct_message_actions";
import { RECEIVE_CONVERSATION } from "../actions/dm_channel_actions";

const conversationMessagesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_DM:
      nextState[action.payload.direct_message.id] = action.payload.direct_message
      return nextState
    case RECEIVE_DMS:
      if (action.payload.conversationMessages) {
        return action.payload.conversationMessages
      } else {
        return {};
      }
    case RECEIVE_CONVERSATION:
      return action.payload.conversationMessages
    default:
      return state;
  }
}

export default conversationMessagesReducer;