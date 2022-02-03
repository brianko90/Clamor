import React from "react";
import { Provider } from "react-redux";
import App from './app';
import { HashRouter } from 'react-router-dom';
import actionCable from 'actioncable';

const CableApp = {};
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  cableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable')
} else {
  cableApp.cable = actionCable.createConsumer('wss://clamor.herokuapp.com/cable')
};


const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App cableApp={CableApp} />
    </HashRouter>
  </Provider>
);

export default Root;