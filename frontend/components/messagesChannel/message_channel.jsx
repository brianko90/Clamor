import React from 'react';

class MessageChannel extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.match.params.channelId)
    this.state = { body: '', channel_id: this.props.match.params.channelId }

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.scrollToBottom = this.scrollToBottom.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchServer(this.props.match.params.serverId)
      .then(() => {
        this.props.fetchChannel(this.props.match.params.channelId)
          .then(() => {
            this.props.fetchMessages(this.props.match.params.channelId)
              .then(() => {
                this.props.cableApp.cable.subscriptions.create({
                  channel: 'ChannelsChannel',
                  id: this.state.channel_id
                },
                  {
                    received: (msg) => {
                      this.props.receiveMessage(msg)
                    }
                  })
              })
          })
      })
    }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createMessage(this.state)
      .then(() => this.props.fetchMessages(this.state.channel_id));
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
                  <div className="message-username">{message.username} <span>{message.createdAt}</span></div>
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
            <div id="placeholder" style={{ float: "left", clear: "both" }} ref={(el) => (this.messagesEnd = el)}>TEST</div>
          </ul>
          <div id="chat-input">
            <form id="message-input" onSubmit={this.handleSubmit}>
              <i className="fas fa-plus-circle"></i>
              <input type="text" onChange={this.update('body')} value={this.state.body} />
            </form>
          </div>
          {/* {this.scrollToBottom()} */}
       </div>
    )
  }
}

export default MessageChannel;