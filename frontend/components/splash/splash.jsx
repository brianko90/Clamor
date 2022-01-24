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
      logOpenButton = <Link id="splash-button" to='/'>Open Clamor</Link>
    } else {
      logOpenButton = <Link id="splash-button" to='/login'>Login</Link>
    }
    //Link should lead to /@me when click Open Clamor
    
    return (
      <div id="splash">
        <div>
          <img id="splash-image1" src={window.splash1URL} alt="splash1" />
        </div>
        <div id="splash-header">
          <Link id="logo-links" to='/'> 
            <i className="fab fa-discord fa-2x"></i>
            <h2>Clamor</h2>
          </Link>
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
        <img id="splash-image2" src={window.splash2URL} alt="splash2" />
        <footer id="splash-footer">
          <div id="footer-top">
            <div id="footer-main">
              <div id="footer-message">
                IMAGINE A PLACE
              </div>
              <div>
                ...imagine a place where you belong
              </div>
            </div>
            <div id="footer-links">
              <a href="https://github.com/brianko90/Clamor" target="_blank">
                <i className="fab fa-github fa-2x"></i>
              </a>
              <a href="https://www.linkedin.com/in/brian-ko-ba5742229/" target="_blank">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
          <div id="footer-bottom">
            <Link to='/' id="footer-left">
              <i className="fab fa-discord fa-2x"></i>
              <h2>Clamor</h2>
            </Link>
            <Link id='footer-signup' to='/signup'>Sign up</Link>
          </div>
          <div id="footer-disclaimer">Disclaimer: This is a clone website of Discord and images were used from the Discord website. Credit belongs to Discord</div>
        </footer>
      </div>
    )
  }
}


export default Splash;