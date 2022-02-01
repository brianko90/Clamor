import React from 'react';

class MessageChannel extends React.Component {
  constructor(props) {
    super(props)

    this.state = { body: '', channel_id: this.props.match.params.channelId }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }
  // Need to pass down channel ID from parent. 
  componentDidMount() {
    // debugger;
    // this.messagesEnd = document.getElementById('placeholder');
    this.props.fetchChannel(this.state.channel_id);

    this.props.fetchMessages(this.state.channel_id)
      .then(() => this.scrollToBottom())
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
    // this.scrollToBottom();
  }
  componentDidUpdate() {
    // debugger;
    this.scrollToBottom();
  }

  scrollToBottom() {
    console.log("TESTTESTTEST", this.messagesEnd)
    this.messagesEnd.scrollIntoView({ behavior: "auto" });
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ channel_id: this.state.channel_id})
    console.log("TEST", this.state);
    this.props.createMessage(this.state);
    this.setState({ body: '' });
  }
  // 2022-01-31T03:37:34.258Z
  formatDate(date) {
    let messageDate = new Date(date);
    return messageDate
  }

  render() {
    // if(!this.props.channel) {
    //   return null;
    // }
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