import { combineReducers } from "redux";
import friendListReducer from "./friend_list_reducer";
import usersReducer from "./users_reducer";
import serversListReducer from './server_list_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversListReducer,
  friends: friendListReducer
});

export default entitiesReducer;