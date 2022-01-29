import React from 'react';
import ServerListContainer from '../servers/server_list_container';
import UserProfile from '../servers/user_profile';
import FriendListContainer from './friend_list_container';

class FriendMain extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getUserFriends(this.props.user.id)
  }

  render() {
    if(!this.props.servers) {
      return null;
    }
    return (

      <div id="server">
        <div id="server-list">
          <ServerListContainer match={this.props.match} chosenServer={this.props.chosenServer} servers={this.props.servers} openModal={this.props.openModal} closeModal={this.props.closeModal} />
        </div>
        <div id="dm-index">
          <div id="friend-tag">
            <input type="text" placeholder="Find or start a conversation" value="" readOnly/>
          </div>
          <div id="dm-list-container">
            <div>DM CONTAINER LIST GOES HERE</div>
          </div>
          <div id="profile">
            <UserProfile user={this.props.user} openModal={this.props.openModal} closeModal={this.props.closeModal} />
          </div>
        </div>
        <div id="friend-main">
          <div id="friend-main-top">
            <h6><i className="fas fa-user-friends"></i> <span>Friends</span></h6>
            <div id="friend-option">
              <div>All</div>
              <div>Pending</div>
            </div>
            <div id="friend-top-nav">
              <nav id="friend-nav">
                <a href="https://github.com/brianko90/Clamor" target="_blank">
                  <i className="fab fa-github fa-2x"></i>
                </a>
                <a href="https://www.linkedin.com/in/brian-ko-ba5742229/" target="_blank">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </nav>
            </div>
          </div>
          <div id="friend-main-bottom">
            <FriendListContainer removeFriend={this.props.removeFriend}/>
          </div>
        </div>
      </div>
    )
  }
}

export default FriendMain