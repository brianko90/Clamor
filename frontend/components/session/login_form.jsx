import { Link, Redirect } from 'react-router-dom';
import React from 'react';
import background from '../../../app/assets/images/loginbackground.png'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
  }

  render() {
   
    return (
      <div id="login-container">
        <img id="background" src={background}/>
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
          <ul id="errors">
            {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
        </div>
      </div >
    )
  }
}

export default LoginForm;

