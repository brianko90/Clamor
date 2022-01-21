import { Link, Redirect } from 'react-router-dom';
import React from 'react';

class SessionForm extends React.Component {
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
    this.props.processForm(this.state)
  }

  render() {
    const link = (this.props.formType === "signup") ? (
      <Link to='/login'>Log In</Link>
    ) : (
      <Link to='/signup'>Sign Up</Link>
    )

    return (
      <div>
        <h2>{this.props.formType}</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input type="text" onChange={this.update('username')} value={this.state.username} />
          </label>
          <label>Password:
            <input type="password" onChange={this.update('password')} value={this.state.password} />
          </label>
          <button onClick={this.handleSubmit}>Button</button>
        </form>
        {link}
        <ul>
          {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
      </div>
    )
  }
}

export default SessionForm;

