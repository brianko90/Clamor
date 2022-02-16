import React from 'react';
import {withRouter} from 'react-router-dom';

class ServerMembersList extends React.Component {
  constructor(props) {
    super(props);
    this.handleMessage = this.handleMessage.bind(this);
  }

  handleMessage(e, friendId) {
    e.preventDefault();
    e.stopPropagation();
    let convos = this.props.conversations.filter(conversation => conversation.members.length === 2);
    let convoId;
    convos.forEach(convo => {
      convo.members.forEach(member => {
        if (member.id === friendId) {
          convoId = convo.id;
        }
      })
    })
    if(convoId) {
      this.props.history.push(`/channels/@me/${convoId}`)
    } else {
      this.props.createConversation({owner_id: friendId})
        .then(() => {
          this.props.history.push(`/channels/@me/${this.props.conversations[this.props.conversations.length - 1].id}`)
        })
    }
  }

  render() {
    return (
      <div>
        <ul id="members-list">
          <li>Members - {this.props.serverMembers.length}</li>
          {this.props.serverMembers.map(member => <li className="member-item" key={member.id}>
                                                    <img src={member.pfp} alt="" />
                                                    <span>{member.username}</span>
                                                    <div className="member-icons">
                                                      <i onClick={(e) => this.handleMessage(e, member.id)} className="tooltip fas fa-user-plus"><span className="tooltiptext">Add friend</span></i>
                                                      <i onClick={(e) => this.handleMessage(e, member.id)} className="tooltip fas fa-comment-alt"><span className="tooltiptext">Message</span></i>
                                                    </div>
                                                  </li>)}
        </ul>
      </div>
    )
  }
}

export default withRouter(ServerMembersList)