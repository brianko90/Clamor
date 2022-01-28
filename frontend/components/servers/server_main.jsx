import React from 'react';
import {Link} from 'react-router-dom';
import ServerListContainer from './server_list_container';
import UserProfile from './user_profile';
import ChannelListContainer from '../channels/channel_list_container';
import ServerMembersList from './server_members';

class ServerMain extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("TEST", this.props)
    this.props.getUserInfo(this.props.currentUserId)
      .then(() => {
        this.props.fetchServer(this.props.chosenServer.id)
      })
  }

  render() {
    if(!this.props.chosenServer) {
      return null;
    }
    return (
      <div id="server">
        <div id="server-list">
          <ServerListContainer chosenServer={this.props.chosenServer} servers={this.props.servers} openModal={this.props.openModal} closeModal={this.props.closeModal}/>
        </div>
        <div id="channel-index">
          <div id="server-name">
            <h6>{this.props.chosenServer.name}</h6>
          </div>
          <div id="channel-list-container">
            <ChannelListContainer channels={this.props.channels} />
          </div>
          <div id="profile">
            <UserProfile user={this.props.user} openModal={this.props.openModal} closeModal={this.props.closeModal} />
          </div>
        </div>
        <div id="server-main">
          <div id="server-main-top">
            <h6>Channel Name goes here</h6>
            <div id="server-top-nav">
              <nav id="server-nav">
                <a href="https://github.com/brianko90/Clamor" target="_blank">
                  <i className="fab fa-github fa-2x"></i>
                </a>
                <a href="https://www.linkedin.com/in/brian-ko-ba5742229/" target="_blank">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </nav>
            </div>
          </div>
          <div id="server-main-bottom">
            <div id="server-main-center">
              <div>CHATBOX GOES HERE</div>
              <div>CHAT TYPE INPUT GOES HERE</div>
            </div>
            <div id="server-main-right">
              <ServerMembersList serverMembers={this.props.serverMembers} fetchServer={this.props.fetchServer} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ServerMain