import React from 'react';


class DMChannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: ''}

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  scrollToBottom() {
    let list = document.getElementById('dm-list');
    list.scrollTo(0, document.querySelector('#dm-list').scrollHeight);
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
      })
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

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

  formatDate(date) {
    console.log(date, typeof date)
    let formatDate = [date.slice(5, 7), date.slice(8, 10), date.slice(0, 4)]
    console.log(formatDate)
    return formatDate.join('/')
  }

  render() {
    if (!this.props.conversationMessages) return null;
    return (
      <div id="dm-channel">
        <ul id="dm-list">
          {this.props.conversationMessages.map(message => (
            <li className="message" key={message.id}>
              <img className="dm-pfp" src={message.pfp} alt="" />
              <div className="dm-info">
                <div>{message.username} <span>{this.formatDate(message.created_at)}</span></div>
                <div>{message.body}</div>
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
          <form id="dm-input" onSubmit={this.handleSubmit}>
            <i className="fas fa-plus-circle"></i>
            <input type="text" onChange={this.update('body')} value={this.state.body} />
          </form>
        </div>
      </div>
    )
  }
}

export default DMChannel