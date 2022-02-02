import React from 'react';

class MessageChannel extends React.Component {
  constructor(props) {
    super(props)
    console.log("CHANNEL ID", this.props.match.params.channelId)
    this.state = { body: '', channel_id: this.props.match.params.channelId }

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  scrollToBottom() {
    let list = document.getElementById('message-list');
    list.scrollTo(0, document.querySelector('#message-list').scrollHeight);
  }

  componentDidMount() {
    this.props.fetchMessages(this.props.match.params.channelId)
      .then(() => {
        this.props.cableApp.cable.subscriptions.create({
          channel: 'ChannelsChannel',
          id: this.props.match.params.channelId
        },
          {
            received: (msg) => {
              this.props.receiveMessage(msg)
            }
          })
      })
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.props.cableApp.cable.subscriptions.create({
      channel: 'ChannelsChannel',
      id: this.props.match.params.channelId
    },
      {
        received: (msg) => {
          this.props.receiveMessage(msg)
        }
      })

    this.scrollToBottom();
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.createMessage({body: this.state.body, channel_id: this.props.match.params.channelId});
    this.setState({ body: '' , channel_id: this.props.match.params.channelId});
  }

  // 2022-01-31T03:37:34.258Z
  formatDate(date) {
    console.log(date, typeof date)
    // let messageDate = date.toString().slice(16,21);
    let messageDate;
    console.log(messageDate)
    return messageDate
  }

  render() {
    // if(!this.props.channel) {
     
    //   return null;
    // }
    return (
       <div id="channel-container">
          <ul id="message-list">
            <li>
              <div>This is the start of the conversation with BLAH</div>
            </li>
            {this.props.messages.map((message) => (
              <li className="message" key={message.id}>
                <img src={message.pfp} />
                <div className="message-container">
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