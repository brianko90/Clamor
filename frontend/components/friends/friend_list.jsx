import React from 'react';

class FriendList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getUserFriends(this.props.currentUserId)
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.friends.map(friend => <li key={friend.id}>{friend.username}</li>)}
        </ul>
      </div>
    )
  }
}

export default FriendList; 