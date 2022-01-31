import React from 'react';
import { createMessage } from '../../actions/message_channel_actions';

class MessageForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { body: '' , channel_id: this.props.channel.id}
    
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return (e) => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createMessage(this.state);
    this.setState({body: ''});
    this.props.fetchMessages(this.props.channel.id)
  }

  render() {
    return (
      <form id="message-input" onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.update('body')} value={this.state.body}/>
        <button>Enter</button>
      </form>
    )
  }
}

export default MessageForm