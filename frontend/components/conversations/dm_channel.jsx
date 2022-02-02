import React from 'react';


class DMChannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: ''}

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchConversation(this.props.match.params.conversationId)
      .then(()=> {
        this.props.cableApp.cable.subscriptions.create({
          channel: 'ConversationsChannel',
          id: this.props.match.params.conversationId
        },
        {
          received: (msg) => {
            this.props.receiveDM(msg)
          }
        })
      });
  }
// IF THIS ERRORS CHECK id: this.props.match.params.conversationId
  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createDM(this.props.match.params.conversationId, this.state)
      .then(()=> {
        this.props.fetchConversation(this.props.match.params.conversationId)
      });
    this.setState({ body: '' });
  }
   componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.messagesEnd.scrollIntoView({ behavior: "auto" });
  }

  render() {
    if (!this.props.conversationMessages) return null;
    return (
      <div id="dm-channel">
        <ul id="dm-list">
          {this.props.conversationMessages.map(message => (
            <li className="dm-item" key={message.id}>
              <img className="dm-pfp" src={message.pfp} alt="" />
              <div className="dm-info">
                <div>{message.username} <span>{message.created_at}</span></div>
                <div>{message.body}</div>
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
      </div>
    )
  }
}

export default DMChannel