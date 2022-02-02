import { RECEIVE_MESSAGE, RECEIVE_MESSAGES } from "../actions/message_channel_actions";
import { RECEIVE_SERVER } from "../actions/server_actions";

const channelMessagesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_MESSAGE:
      nextState[action.payload.message.id] = action.payload.message
      return nextState
    case RECEIVE_MESSAGES:
      if (action.payload.channelMessages) {
        return action.payload.channelMessages
      } else {
        return {};
      }
    default: 
      return state;
  }
} 

export default channelMessagesReducer;