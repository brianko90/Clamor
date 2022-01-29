import React from 'react';

class FriendList extends React.Component {
  constructor(props) {
    super(props)
    this.deleteFriend = this.deleteFriend.bind(this);
  }

  componentDidMount() {
    this.props.getUserFriends(this.props.currentUserId)
  }

  deleteFriend(e, friendId) {
    e.preventDefault();
    this.props.removeFriend(this.props.currentUserId, friendId);
  }

  render() {
    return (
      <div id="friend">
        <ul>
          {this.props.friends.map(friend => <li className="friend-item" key={friend.id}>
                                              <div>{friend.username}</div>
                                              <div className="friend-buttons">
                                                <i className="fas fa-comment-alt"></i>
                                                <i onClick={(e) => this.deleteFriend(e, friend.id)} className="fas fa-minus-circle"></i>
                                              </div>
                                            </li>)}
        </ul>
      </div>
    )
  }
}

export default FriendList; 