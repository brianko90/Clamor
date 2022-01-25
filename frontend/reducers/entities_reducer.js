import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import serversReducer from './server_list_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversReducer
});

export default entitiesReducer;