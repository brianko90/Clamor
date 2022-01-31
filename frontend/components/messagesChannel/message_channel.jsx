import React from 'react';

class MessageChannel extends React.Component {
  constructor(props) {
    super(props)

    let url = window.location.href.split('/');
    this.channelId = url[url.length - 1];
    this.state = { body: '', channel_id: this.channelId }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.fetchMessages(this.channelId);
    // this.scrollToBottom();
  }
  // componentDidUpdate() {
  //   this.scrollToBottom();
  // }

  // scrollToBottom() {
  //   this.messagesEnd.scrollIntoView({ behavior: "auto" });
  // }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createMessage(this.state);
    this.setState({ body: '' });
  }
  // 2022-01-31T03:37:34.258Z
  formatDate(date) {
    let messageDate = new Date(date);
    return messageDate
  }

  render() {
    if(!this.props.channel) {
      return null;
    }
    return (
       <div id="channel-container">
          <ul id="message-list">
            {this.props.messages.map((message) => (
              <li className="message" key={message.id}>
                <img src={message.pfp} />
                <div className="message-container">
                  {console.log(message)}
                  <div className="message-username">{message.username} <span>{message.created_at}</span></div>
                  <div className="message-body">{message.body}</div>
                </div>
                <div className="message-options">
                  <div className="message-tools">
                    <i className="fas fa-trash-alt"></i>
                    <i className="fas fa-wrench"></i>
                  </div>
                </div>
              </li>
            ))}
            {/* <div style={{ float:"left", clear: "both" }} ref={(el) => { this.messagesEnd = el; }}></div> */}
          </ul>
          <div id="chat-input">
            <form id="message-input" onSubmit={this.handleSubmit}>
              <i className="fas fa-plus-circle"></i>
              <input type="text" onChange={this.update('body')} value={this.state.body} />
            </form>
          </div>
       </div>
    )
  }
}

export default MessageChannel;