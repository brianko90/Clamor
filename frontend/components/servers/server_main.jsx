import React from 'react';
import {Link} from 'react-router-dom';
import ServerListContainer from './server_list_container';
import FriendListContainer from '../friends/friend_list_container';
import UserProfile from './user_profile';

class ServerMain extends React.Component {

  constructor(props) {
    super(props);
    console.log("TESTTEST", props)
  }

  componentDidMount() {
    this.props.getUserInfo(this.props.currentUserId)
  }

  componentDidUpdate(prevProps) {
    if (this.props.getUserInfo !== prevProps.getUserInfo) {
      this.componentDidMount()
    }
  }

  render() {
    if(!this.props.chosenServer) {
      return null;
    }
    return (
      <div id="server">
        <div id="server-list">
          <ServerListContainer servers={this.props.servers} openModal={this.props.openModal} closeModal={this.props.closeModal}/>
        </div>
        <div id="server-main">
          <div id="channel-index">
            <h6>{this.props.chosenServer.name}</h6>
            <div>CHANNEL INDEX GOES HERE</div>
            <div>
              <UserProfile user={this.props.user} openModal={this.props.openModal} closeModal={this.props.closeModal}/>
            </div>
          </div>
          <div id="server-nav-chat-friend">
            <div id="server-main-top">
              <h6>Channel Name goes here</h6>
              <div>other nav bar stuff goes here</div>
            </div>
            <div id="server-main-bottom">
              <div id="server-main-center">
                <div>CHATBOX GOES HERE</div>
                <div>CHAT TYPE INPUT GOES HERE</div>
              </div>
              <div id="server-main-right">
                <FriendListContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ServerMain