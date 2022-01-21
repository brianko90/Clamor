import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const display = this.props.currentUser ? (
    //   <div>
    //     <p>Welcome, {this.props.currentUser.username}</p>
    //     <button onClick={this.props.logout}>Log Out</button>
    //   </div>
    // ) : (
    //   <div>
    //     <Link to="/signup">Sign Up</Link>
    //     <Link to="/login">Log In</Link>
    //   </div>
    // )
    let logOpenButton;
    if(this.props.loggedIn) {
      logOpenButton = <Link>Open Accord</Link>
    }

    return (
      <div id="splash">
        <div id="splash-header">
          <i class="fab fa-discord"></i>
          <h1>Clamor</h1>
        </div>
        <nav>
          <a href="https://github.com/brianko90/Clamor" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/brian-ko-ba5742229/" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
        </nav>
      </div>
    )
  }
}


export default Greeting;