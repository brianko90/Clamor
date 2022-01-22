import { Link, Redirect } from 'react-router-dom';
import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
  }

  render() {
  
    return (
      <div id="signup-form">
        <h2>Signup</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input type="text" onChange={this.update('username')} value={this.state.username} />
          </label>
          <label>Email:
            <input type="text" onChange={this.update('email')} value={this.state.email} />
          </label>
          <label>Password:
            <input type="password" onChange={this.update('password')} value={this.state.password} />
          </label>
          <button onClick={this.handleSubmit}>Button</button>
        </form>
        <Link to='/login'>Log In</Link>
        <ul>
          {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
      </div>
    )
  }
}

export default SignupForm;

