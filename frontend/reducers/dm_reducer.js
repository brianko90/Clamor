import { RECEIVE_DM, RECEIVE_DMS } from "../actions/direct_message_actions";

const conversationMessagesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_DM:
      nextState[action.payload.message.id] = action.payload.message
      return nextState
    case RECEIVE_DMS:
      if (action.payload.conversationMessages) {
        return action.payload.channelMessages
      } else {
        return {};
      }
    case RECEIVE_CONVERSATION:
      return {};
    default:
      return state;
  }
}

export default conversationMessagesReducer;