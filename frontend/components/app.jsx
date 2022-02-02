import React from "react";
import SplashContainer from './splash/splash_container';
import { Route, Redirect, Switch } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import FriendMainContainer from './friends/friend_main_container';
import ServerMainContainer from './servers/server_main_container';
import Modal from './modal/modal'

const App = ({cableApp}) => (
  <div>
    <Modal /> 
    <Switch>
      <Route exact path='/' component={SplashContainer} />
      <AuthRoute path='/login' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
      <ProtectedRoute path='/channels/@me/:conversationId' component={FriendMainContainer} cableApp={cableApp}/>
      <ProtectedRoute path='/channels/@me' component={FriendMainContainer} cableApp={cableApp}/>
      <ProtectedRoute path='/channels/:serverId/:channelId' component={ServerMainContainer} cableApp={cableApp}/>
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;

