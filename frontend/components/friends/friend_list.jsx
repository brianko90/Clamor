import React from 'react';

class FriendList extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);

    // this.state = {user_id: this.props.currentUserId, friend_id: '', status: 3}
  }

  // componentDidMount() {
  //   this.props.getUserFriends(this.props.currentUserId)
  // }

  handleDelete(e, friendId) {
    e.preventDefault();
    this.props.deleteFriend(this.props.currentUserId, friendId)
      .then(() => this.props.getUserFriends(this.props.currentUserId));
  }

  handleUpdate(e, friendId) {
    e.preventDefault();
    this.props.updateFriend(this.props.currentUserId, friendId)
      .then(() => this.props.getUserFriends(this.props.currentUserId));
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
    let friends;
    let header;
    if (this.props.pendingStatus) {
      header = `PENDING - ${this.props.pending.length}`;
      friends = this.props.pending;
    } else {
      header = `ALL FRIENDS - ${this.props.friends.length}`;
      friends = this.props.friends;
    }

    return (
      <div id="friend">
        <ul id="friend-list">
          <li className="friend-item">{header}</li>
          {friends.map(friend => 
            <li className="friend-item" key={friend.id}>
              <div>
                <img src={friend.pfp} />
                <div>{friend.username}</div>
              </div>
              {this.props.pending.includes(friend) ? 
              <div className="friend-buttons">
                {this.props.incoming.includes(friend) ? <i onClick={e => this.handleUpdate(e, friend.id)}className="tooltip fas fa-user-check"><span className="tooltiptext">Accept</span></i> : ""}
                <i onClick={(e) => this.handleDelete(e, friend.id)} className="tooltip fas fa-times"><span className="tooltiptext">Cancel</span></i>
              </div> 
              : 
              <div className="friend-buttons">
                <i onClick={(e) => this.handleMessage(e, friend.id)} className="tooltip fas fa-comment-alt"><span className="tooltiptext">Message</span></i>
                <i onClick={(e) => this.handleDelete(e, friend.id)} className="tooltip fas fa-minus-circle"><span className="tooltiptext">Remove</span></i>
              </div>}
            </li>)
          }
        </ul>
      </div>
    )
  }
}

export default FriendList; 