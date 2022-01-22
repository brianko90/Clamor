import { Link, Redirect } from 'react-router-dom';
import React from 'react';

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
      <div id='login-form'>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input type="text" onChange={this.update('username')} value={this.state.username} />
          </label>
          <label>Password:
            <input type="password" onChange={this.update('password')} value={this.state.password} />
          </label>
          <button onClick={this.handleSubmit}>Button</button>
        </form>
        <Link to='/signup'>Sign Up</Link>
        <ul>
          {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
      </div>
    )
  }
}

export default LoginForm;

