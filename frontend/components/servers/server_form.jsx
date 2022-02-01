import React from 'react';
import {Redirect} from 'react-router-dom';

class ServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', owner_id: this.props.currentUserId, public: ''};
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field){
    return (e) => this.setState({[field]: e.currentTarget.value})
  }

  componentDidMount() {
    this.removeClass();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createServer(this.state)
      .then(
        () => {
          this.props.closeModal();
          // let lastServerId = this.props.servers[this.props.servers.length - 1].id;
          // this.props.history.push(`/channels/${lastServerId}`)
        }
      );
  }

  removeClass() {
    let buttons = document.getElementsByClassName('public-button');
    buttons = Array.prototype.slice.call(buttons);
    buttons.forEach((button) => {
      if (button.classList.contains('selected-public')) {
        button.classList.remove('selected-public')
      }
    })
  }

  handleClick(e, field) {
    e.preventDefault();
    this.setState({[field]: e.currentTarget.value});
    this.removeClass();
    e.currentTarget.classList.add('selected-public')
  }

  render() {
    return (
      <div id="server-form-container">
        <form onSubmit={this.handleSubmit}>
          <div id="server-head">
            <h2>Customize your server</h2>
            <div id="server-form-close">X</div>
          </div>
          <p id="server-message"> Give your new server a personality with a name and an icon. You can always change it later.</p>
          <div>UPLOAD PICTURE GOES HERE</div>
          <div id="public-options">
            <button className="public-button" onClick={(e) => {this.handleClick(e, 'public')}} value="true" >
              For me and my friends <i className="fas fa-chevron-right"></i>
            </button>
            <button className="public-button" onClick={(e) => { this.handleClick(e, 'public')}} value="false">
              For a club or community <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <div id="server-name-input">
            <div>SERVER NAME</div>
            <input type="text" value={this.state.name} onChange={this.update('name')} />
          </div>
          <button onClick={this.handleSubmit}>Create Server</button>
        </form>
        <div>Cancel</div>
      </div>
    )
  }
}

export default ServerForm