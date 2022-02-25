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
    let username;
    if(this.state.errors.includes(`Username can't be blank`)) {
      username = <label className="form-label signup-error">USERNAME - Username can't be blank!
                    <input type="text" onChange={this.update('username')} value={this.state.username} />
                  </label>
    } else if(this.state.errors.includes('Username has already been taken')){
      username = <label className="form-label signup-error">USERNAME - Username is already taken!
                    <input type="text" onChange={this.update('username')} value={this.state.username} />
                  </label>
    } else {
      username = <label className="form-label">USERNAME
                    <input type="text" onChange={this.update('username')} value={this.state.username} />
                  </label>
    }
    let email;
    if(this.state.errors.includes('Email has already been taken')) {
      email = <label className="form-label email-error">EMAIL - Email is already taken!
                <input type="text" onChange={this.update('email')} value={this.state.email} />
              </label>
    } else if(this.state.errors.includes('Email invalid')) {
      email = <label className="form-label email-error">EMAIL - Email invalid!
                <input type="text" onChange={this.update('email')} value={this.state.email} />
              </label>
    } else {
      email = <label className="form-label">EMAIL
                <input type="text" onChange={this.update('email')} value={this.state.email} />
              </label>
    }
    let password;
    if(this.state.errors.includes('Password is too short (minimum is 4 characters)')) {
      password = <label className="form-label password-error">PASSWORD - Password is too short!
                    <input type="password" onChange={this.update('password')} value={this.state.password} />
                  </label>
    } else {
      password = <label className="form-label">PASSWORD
                    <input type="password" onChange={this.update('password')} value={this.state.password} />
                  </label>
    }
  
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
            {password}
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

