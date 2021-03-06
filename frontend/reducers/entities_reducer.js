import { combineReducers } from "redux";
import friendListReducer from "./friend_list_reducer";
import usersReducer from "./users_reducer";
import serversListReducer from './server_list_reducer';
import incomingReducer from './incoming_reducer';
import outgoingReducer from './outgoing_reducer';
import channelsReducer from './channels_reducer';
import serverMembersReducer from "./server_members_reducer";
import channelMessagesReducer from "./message_channel_reducer";
import conversationMessagesReducer from './dm_reducer';
import dmChannelsReducer from "./dm_channels_reducer";
import serversAllReducer from './all_servers_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversListReducer,
  friends: friendListReducer,
  incoming: incomingReducer,
  outgoing: outgoingReducer,
  serverChannels: channelsReducer,
  serverMembers: serverMembersReducer,
  channelMessages: channelMessagesReducer,
  conversationMessages: conversationMessagesReducer,
  conversations: dmChannelsReducer,
  allServers: serversAllReducer
});

export default entitiesReducer;