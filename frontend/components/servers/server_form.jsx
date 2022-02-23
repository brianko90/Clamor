import React from 'react';

class ServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', owner_id: this.props.currentUserId, public: '', errors: []};
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
    this.props.createServer(this.state).fail(() => this.setState({errors: this.props.errors}))
      .then(() => {
        this.props.closeModal()
      }) 
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

    const name = this.state.errors.length > 0 ? (
      <div id="server-error">SERVER NAME - Server name cannot be blank!</div>
    ) : (
      <div>SERVER NAME</div>
    )

    const option = this.state.errors.length > 0 ? (
      <div id="public-options">
        <div className="server-public-error">Server type needs to be selected!</div>
        <button className="public-button" onClick={(e) => { this.handleClick(e, 'public') }} value="true" >
          <img src={window.private} />For me and my friends <i className="fas fa-chevron-right"></i>
        </button>
        <button className="public-button" onClick={(e) => { this.handleClick(e, 'public') }} value="false">
          <img src={window.public} />For a club or community <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    ) : (
      <div id="public-options">
        <button className="public-button" onClick={(e) => { this.handleClick(e, 'public') }} value="true" >
          <img src={window.private} />For me and my friends <i className="fas fa-chevron-right"></i>
        </button>
        <button className="public-button" onClick={(e) => { this.handleClick(e, 'public') }} value="false">
            <img src={window.public} />For a club or community <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    )

    return (
      <div id="server-form-container">
        <form onSubmit={this.handleSubmit}>
          <div id="server-head">
            <div onClick={() => this.props.closeModal()} id="server-form-close">X</div>
            <h2>Customize your server</h2>
          </div>
          <p id="server-message"> Give your new server a personality with a name and an icon. You can always change it later.</p>
          {option}
          <div id="server-name-input">
            {name}
            <input type="text" value={this.state.name} onChange={this.update('name')} />
          </div>
          <div id="server-submit">
            <div onClick={() => this.props.closeModal()}>Cancel</div>
            <button id="create-server-button" onClick={this.handleSubmit}>Create Server</button>
          </div>
        </form>
      </div>
    )
  }
}

export default ServerForm