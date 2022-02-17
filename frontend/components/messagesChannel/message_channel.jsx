import React from 'react';

class MessageChannel extends React.Component {
  constructor(props) {
    super(props)
    this.state = { body: '', channel_id: this.props.match.params.channelId, edit: '' }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
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

  componentDidUpdate(prevProps) {
    if (this.props.match.params.channelId !== prevProps.match.params.channelId) {
      this.props.cableApp.cable.subscriptions.create({
        channel: 'ChannelsChannel',
        id: this.props.match.params.channelId
      },
      {
        received: (msg) => {
          this.props.receiveMessage(msg)
        }
      })
    }
  
    this.scrollToBottom();
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createMessage({body: this.state.body, channel_id: this.props.match.params.channelId});
    this.setState({ body: '' , channel_id: this.props.match.params.channelId});
  }

  formatDate(date) {
    if (!date) return "";
    let formatDate = [date.slice(5,7), date.slice(8,10), date.slice(0,4)]
    return formatDate.join('/')
  }

  handleDelete(e, message) {
    e.preventDefault();
    this.props.deleteMessage(message);
  }

  handleClick(e, messageId) {
    if(e.key === "Escape" || e.type === "click" || e.type === "submit") {
      let elements = document.getElementsByClassName(messageId);
      console.log(elements)
      elements[0].classList.toggle("inActive")
      let message = Array.from(document.getElementsByClassName(`${messageId}`)).filter(el => el.classList.contains('message-body'))[0];
      console.log("MESSAGE", message)
      elements[1].classList.toggle("inActive")
    }
  }

  handleUpdate(e, message) {
    e.preventDefault();
    let edit = {body: this.state.edit, id: message.id, channel_id: message.channel_id}
    this.props.updateMessage(edit)
      .then(() => {
        this.handleClick(e, edit.id)
      })
  }

  render() {
    return (
       <div id="channel-container">
          <ul id="message-list">
            {this.props.messages.map((message) => (
              <li className="message" key={message.id}>
                <img src={message.pfp} />
                <div className="message-container">
                  <div className="message-username">{message.username} <span>{message.created_at ? this.formatDate(message.created_at) : this.formatDate(message.createdAt)}</span></div>
                  <div className={`message-body ${message.id}`}>{message.body}</div>
                  <form onSubmit={e => this.handleUpdate(e, message)} className={`message-edit ${message.id} inActive`}>
                    <input onKeyUp={e => this.handleClick(e, message.id)} className="channel-message-edit-input" type="text" onChange={this.update('edit')} value={this.state.edit}></input>
                    <div className="message-edit-options">
                      <div>escape to <span className="save" onClick={e => this.handleClick(e, message.id)}>cancel</span>  •</div>
                      <div>enter to <span className="save" onClick={e => this.handleUpdate(e, message)}>save</span></div>
                    </div>
                  </form>
                </div>
                <div className="message-options">
                  <div className="message-tools">
                    <i onClick={e => this.handleDelete(e, message)} className="fas fa-trash-alt"></i>
                    <i onClick={e => this.handleClick(e, message.id)} className="fas fa-wrench"></i>
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