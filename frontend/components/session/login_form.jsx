import { Link, Redirect } from 'react-router-dom';
import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).fail(() => this.setState({ errors: this.props.errors}))
  }

  loginDemo(e) {
    e.preventDefault();
    this.props.login({ username: 'brian', password: "1234" })
  }

  render() {
   
    return (
      <div id="login-container">
        <img id="background" src={window.background}/>
        <div id='login-form'>
          <div id="welcome">
            <h2>Welcome back!</h2>
            <div>We're glad to see you!</div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <label className="form-label">USERNAME
              <input type="text" onChange={this.update('username')} value={this.state.username} />
            </label>
            <label className="form-label">PASSWORD 
              <input type="password" onChange={this.update('password')} value={this.state.password} />
            </label>
            <button className="form-button" onClick={this.handleSubmit}>Login</button>
          </form>
          <div id="alternate">Need an account?  <Link to='/signup'>Register</Link></div>
          <div id="demo-container">
            <button id="demo-login" onClick={this.loginDemo}>DEMO</button>
          </div>
          <ul id="errors">
            {this.state.errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
        </div>
      </div >
    )
  }
}

export default LoginForm;

