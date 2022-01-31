import React from 'react';

class FriendList extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      friends: this.props.friends
    }
  }

  componentDidMount() {
    this.props.getUserFriends(this.props.currentUserId)
  }

  handleDelete(e, friendId) {
    e.preventDefault();
    this.props.deleteFriend(this.props.currentUserId, friendId)
      .then(() => this.props.getUserFriends(this.props.currentUserId));
  }

  render() {
    return (
      <div id="friend">
        <ul id="friend-list">
          <li className="friend-item">{this.props.pendingStatus ? `PENDING - ${this.props.friends.length}` : `ALL FRIENDS - ${this.props.friends.length}`}</li>
          {this.props.friends.map(friend => 
            <li className="friend-item" key={friend.id}>
              <div>
                <img src={friend.pfp} />
                <div>{friend.username}</div>
              </div>
              {/* {this.props.accepted ? (this.props.incoming.includes(friend) ? <div>Incoming Friend Request</div> : <div>Outgoing Friend Request</div>) : ""} */}
                {this.props.pending.includes(friend) ? <div className="friend-buttons"><i onClick={(e) => this.handleDelete(e, friend.id)} className="tooltip fas fa-times"><span className="tooltiptext">Cancel</span></i></div> : <div className="friend-buttons">
                <i className="tooltip fas fa-comment-alt"><span className="tooltiptext">Message</span></i>
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