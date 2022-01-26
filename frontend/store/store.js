import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

let midWare = [thunk];
if (process.env.NODE_ENV === "development") midWare.push(logger);

const configureStore = (preloadedState = {}) =>
  createStore(rootReducer, preloadedState, applyMiddleware(...midWare));

export default configureStore;