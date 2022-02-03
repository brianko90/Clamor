import { Link, Redirect } from 'react-router-dom';
import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      errors: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.signup(this.state).fail(() => this.setState({ errors: this.props.errors}))
  }

  render() {
    const username = this.state.errors.length > 0 ? (
      <label className="form-label signup-error">USERNAME - Username or Email is already taken!
        <input type="text" onChange={this.update('username')} value={this.state.username} />
      </label>
      )
      : (
      <label className="form-label">USERNAME
        <input type="text" onChange={this.update('username')} value={this.state.username} />
      </label>
      )

    const email = this.state.errors.length > 0 ? (
      <label className="form-label email-error">EMAIL - Username or Email is already taken!
        <input type="text" onChange={this.update('email')} value={this.state.email} />
      </label>
      )
      : (
      <label className="form-label">EMAIL
        <input type="text" onChange={this.update('email')} value={this.state.email} />
      </label>
      )
    console.log(this.props.errors)
    return (
      <div id="signup-container">
        <img id="background" src={window.background} />
        <div id="signup-form">
          <div id="welcome">
            <h2>Create an account</h2>
          </div>
          <form onSubmit={this.handleSubmit}>
            {username}
            {email}
            <label className="form-label">PASSWORD
              <input type="password" onChange={this.update('password')} value={this.state.password} />
            </label>
            <button className="form-button" onClick={this.handleSubmit}>Continue</button>
          </form>
          <div id="alternate">Already have an account?  <Link to='/login'>Log In</Link></div>
          <div id="disclaimer">By registering, you agree to Clamor's Terms of Service and Privacy Policy</div>
        </div>
      </div >
    )
  }
}

export default SignupForm;

