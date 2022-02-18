import React from 'react';


class DMChannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: '', edit: ''}

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.checkOwner = this.checkOwner.bind(this);
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
    this.setState({ body: ''});
  }

  formatDate(date) {
    if(!date) return "";
    
    let formatDate = [date.slice(5, 7), date.slice(8, 10), date.slice(0, 4)]
    return formatDate.join('/')
  }

  handleDelete(e, message) {
    e.preventDefault();
    this.props.deleteDM(message);
  }

  handleUpdate(e, message) {
    e.preventDefault();
    let edit = {body: this.state.edit, id: message.id, conversation_id: message.conversation_id}
    this.props.updateDM(edit)
      .then(() => {
        this.handleClick(e, edit.id)
      })
  }

  handleClick(e, messageId) {
    if(e.key === "Escape" || e.type === "click" || e.type === "submit") {
      let element = document.getElementById(messageId);
      element.classList.toggle("inActive")
      let message = document.getElementsByClassName(`${messageId}`)[0]
      message.classList.toggle("inActive")
    }
  }

  checkOwner(message) {
    let tools;
    if (message.user_id === this.props.currentUserId) {
      tools = <div className="message-options">
                <div className="message-tools">
                  <i onClick={e => this.handleDelete(e, message)} className="fas fa-trash-alt"></i>
                  <i onClick={e => this.handleClick(e, message.id)} className="fas fa-wrench"></i>
                </div>
              </div> 
    } else {
      tools = ""
    }
    return tools;
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
                <div className={`message-hide ${message.id}`} >{message.body}</div>
                <form onSubmit={e => this.handleUpdate(e, message)} id={message.id} className="message-edit inActive">
                  <input onKeyUp={e => this.handleClick(e, message.id)} className="message-edit-input" type="text" onChange={this.update('edit')} value={this.state.edit}></input>
                  <div className="message-edit-options">
                    <div>escape to <span className="save" onClick={e => this.handleClick(e, message.id)}>cancel</span>  •</div>
                    <div>enter to <span className="save" onClick={e => this.handleUpdate(e, message)}>save</span></div>
                  </div>
                </form>
              </div>
              {this.checkOwner(message)}          
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