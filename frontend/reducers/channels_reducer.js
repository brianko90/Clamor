import { RECEIVE_SERVER } from "../actions/server_actions";
import { RECEIVE_CHANNEL } from "../actions/channel_actions";

const channelsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_SERVER:
      if (action.payload.channels) {
        return action.payload.channels;
      } else {
        return {};
      }
    default:
      return state;
  }
}

export default channelsReducer;