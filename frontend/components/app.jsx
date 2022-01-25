import React from "react";
import SplashContainer from './splash/splash_container';
import { Route, Redirect, Switch } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute } from "../util/route_util";
import ServerListContainer from './servers/server_list_container';
import ServerMainContainer from './servers/server_main_container'
const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={SplashContainer} />
      <Route exact path='/@me' component={ServerMainContainer} />
      <AuthRoute path='/login' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;