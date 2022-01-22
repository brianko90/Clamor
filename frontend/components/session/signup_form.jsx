import { Link, Redirect } from 'react-router-dom';
import React from 'react';
import background from '../../../app/assets/images/loginbackground.png'

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
      <div id="signup-container">
        <img id="background" src={background} />
        <div id="signup-form">
          <div id="welcome">
            <h2>Create an account</h2>
          </div>
          <form onSubmit={this.handleSubmit}>
            <label className="form-label">Email
              <input type="text" onChange={this.update('email')} value={this.state.email} />
            </label>
            <label className="form-label">Username
              <input type="text" onChange={this.update('username')} value={this.state.username} />
            </label>
            <label className="form-label">Password
              <input type="password" onChange={this.update('password')} value={this.state.password} />
            </label>
            <button className="form-button" onClick={this.handleSubmit}>Continue</button>
          </form>
          <div id="alternate">Already have an account?  <Link to='/login'>Log In</Link></div>
          <div id="disclaimer">By registering, you agree to Clamor's Terms of Service and Privacy Policy</div>
          <ul id="errors">
            {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
        </div>
      </div >
    )
  }
}

export default SignupForm;

