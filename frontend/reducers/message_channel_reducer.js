import { RECEIVE_MESSAGE, RECEIVE_MESSAGES } from "../actions/message_channel_actions";


const channelMessagesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_MESSAGE:
      if(action.payload.channelMessages) {
        return action.payload.channelMessages
      } else {
        return {};
      }
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