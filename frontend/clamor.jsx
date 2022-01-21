import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from "./store/store"
import {signup, login, logout} from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);

  // Testing Start
  window.store = store;
  window.signup = signup
  window.login = login
  window.logout = logout
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  // Testing End
});


// Work on putting in user model and controller
// then need to update the views and routes