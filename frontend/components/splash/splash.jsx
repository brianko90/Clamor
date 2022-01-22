import React from 'react';
import { Link } from 'react-router-dom';


class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let logOpenButton;
    let testLogout = <button onClick={() => this.props.logout()}>Logout</button>
    if(this.props.loggedIn) {
      logOpenButton = <Link id="splash-button" to='/'>Open Accord</Link>
    } else {
      logOpenButton = <Link id="splash-button" to='/login'>Login</Link>
    }
    //Link should lead to /@me when click Open Accord

    return (
      <div id="splash">
        <div id="splash-header">
          <i className="fab fa-discord fa-3x"></i>
          <h2>Clamor</h2>
          <nav id="nav-links">
            <a href="https://github.com/brianko90/Clamor" target="_blank">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/brian-ko-ba5742229/" target="_blank">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </nav>
          <div id="login-button">
            {logOpenButton}
            {this.props.loggedIn ? testLogout : ""}
          </div>
        </div>
        <div id="splash-content">
          <Link to='/signup'>Create an Account Here!</Link>
        </div>
        
        
        
      </div>
    )
  }
}


export default Splash;