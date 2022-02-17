import React from 'react';
import {withRouter} from 'react-router-dom';

class ServerMembersList extends React.Component {
  constructor(props) {
    super(props);
    this.handleMessage = this.handleMessage.bind(this);
    this.checkFriend = this.checkFriend.bind(this);
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

  handleFriend(e, memberId) {
    e.preventDefault();
    this.props.createFriend({user_id: this.props.currentUserId, friend_id: memberId, status: 1})
  }

  checkFriend(memberId) {
    if(memberId === this.props.currentUserId) {
      return
    }
    let friendCheck = this.props.friends.filter(friend => friend.id === memberId)
    if (friendCheck.length === 0) {
      return <div className="member-icons">
        <i onClick={(e) => this.handleMessage(e, memberId)} className="tooltip fas fa-comment-alt"><span className="tooltiptext">Message</span></i>
        <i onClick={(e) => this.handleFriend(e, memberId)} className="tooltip fas fa-user-plus"><span className="tooltiptext">Add friend</span></i>
      </div>
    } else {
      return <div className="member-icons">
        <i onClick={(e) => this.handleMessage(e, memberId)} className="tooltip fas fa-comment-alt"><span className="tooltiptext">Message</span></i>
      </div>
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
                                                    {this.checkFriend(member.id)}
                                                  </li>)
          }
        </ul>
      </div>
    )
  }
}

export default withRouter(ServerMembersList)