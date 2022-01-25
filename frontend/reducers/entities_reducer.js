import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import serversListReducer from './server_list_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  serverMemberships: serversListReducer
});

export default entitiesReducer;