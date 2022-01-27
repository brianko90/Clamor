import React from 'react';

class ServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', owner_id: this.props.currentUserId, public: ''};
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field){
    return (e) => this.setState({[field]: e.currentTarget.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createServer(this.state)
  }

  render() {
    return (
      <div id="server-form-container">
        <form onSubmit={this.handleSubmit}>
          <h2>Customize your server</h2>
          <p> Give your new server a personality with a name and an icon. You can always change it later.</p>
          <button>UPLOAD</button>
          <div>
            <div>SERVER NAME</div>
            <input type="text" value={this.state.name} onChange={this.update('name')} />
          </div>
          <div>
            <div>Server Type</div>
            <label>For me and my friends
              <input type="radio" value="false" onChange={this.update('public')} />
            </label>
            <label>For a club or community
              <input type="radio" value="true" onChange={this.update('public')} />
            </label>
          </div>
          <button>Create Server</button>
        </form>
      </div>
    )
  }
}

export default ServerForm