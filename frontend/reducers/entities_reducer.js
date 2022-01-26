import { combineReducers } from "redux";
import friendListReducer from "./friend_list_reducer";
import usersReducer from "./users_reducer";
import serversListReducer from './server_list_reducer';
import incomingReducer from './incoming_reducer';
import outgoingReducer from './outgoing_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversListReducer,
  friends: friendListReducer,
  incoming: incomingReducer,
  outgoing: outgoingReducer
});

export default entitiesReducer;