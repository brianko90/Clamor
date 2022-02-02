import React from 'react';
import {Link} from 'react-router-dom';
import ServerListContainer from './server_list_container';
import UserProfile from './user_profile';
import ChannelListContainer from '../channels/channel_list_container';
import ServerMembersList from './server_members';
import MessageChannel from '../messagesChannel/message_channel';

class ServerMain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {render: false}
  }

  componentDidMount() {
    // this.handleScroll();
    let channelId = this.props.match.params.channelId;
    let serverId = this.props.match.params.serverId;
    this.props.getUserInfo(this.props.currentUserId)
      .then(() => {
        this.props.fetchServer(this.props.serverId)
      })
  }

  // componentDidUpdate(){
  //   this.handleScroll();
  // }

  // handleScroll() {
  //   this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth'});
  // }

  dropdown(e) {
    e.preventDefault();
    let settings = document.getElementById("server-dropdown");

    if (settings.classList.contains("show-server")) {
      settings.classList.remove("show-server")
    } else {
      settings.classList.add("show-server")
    }

    // $(':not(.server-dropdown)').click(function () {
    //   $('.show-server').toggle("show-server");
    // });    
  }

  // closeDropdown(e) {
  //   e.preventDefault();
  //   let elements = document.querySelectorAll("*:not(#server-dropdown")
  //   elements = Array.prototype.slice.call(elements)
  //   elements.map((el) => el.classList.remove('show-server'))
  // }

  render() {
    if (!this.props.chosenServer) {
      return null;
    }
    return (
      <div id="server">
        <div id="server-list">
          <ServerListContainer match={this.props.match} channel={this.props.chosenChannel} fetchMessages={this.props.fetchMessages} chosenServer={this.props.chosenServer.name.toLowerCase()} servers={this.props.servers} openModal={this.props.openModal} closeModal={this.props.closeModal}/>
        </div>
        <div id="channel-index">
          <div id="server-name" className="serverButton" onClick={this.dropdown}>
            <h6>{this.props.chosenServer.name}</h6>
            <i className="fas fa-chevron-down"></i>
            <div id="server-dropdown" className="server-drop-content">
              <div>Update Server</div>
              <div>Delete Server</div>
            </div>
          </div>
          <div id="channel-list-container">
            <ChannelListContainer match={this.props.match} channels={this.props.channels} server={this.props.chosenServer} fetchMessages={this.props.fetchMessages}/>
          </div>
          <div id="profile">
            <UserProfile user={this.props.user} openModal={this.props.openModal} closeModal={this.props.closeModal} />
          </div>
        </div>
        <div id="server-main">
          <div id="server-main-top">
            <h6><i className="fas fa-hashtag"></i> <span>{this.props.chosenChannel ? this.props.chosenChannel.name.toLowerCase() : "general"}</span></h6>
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
              <MessageChannel server={this.props.chosenServer} match={this.props.match} fetchServer={this.props.fetchServer} cableApp={this.props.cableApp} fetchChannel={this.props.fetchChannel} fetchMessages={this.props.fetchMessages} channel={this.props.chosenChannel} messages={this.props.messages} createMessage={this.props.createMessage} receiveMessage={this.props.receiveMessage}/>
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