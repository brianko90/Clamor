import React from "react";
import HomeContainer from './splash/splash_container';
import { Route } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute } from "../util/route_util"
// import SearchContainer from './bench/search_container'
const App = () => (
  <div>
    <header>
      <h1>Clamor</h1>
    </header>
    <Route exact path='/' component={SplashContainer} />
    <Route path='/login' component={LoginFormContainer} />
    <Route path='/signup' component={SignupFormContainer} />
    {/* <Route exact path="/" component={SearchContainer} /> */}
  </div>
);

export default App;