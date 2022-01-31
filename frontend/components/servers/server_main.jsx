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
    // this.handleScroll = this.handleScroll.bind(this);
    // this.messagesEndRef = React.createRef();
    this.state = {render: false}
  }

  componentDidMount() {
    // this.handleScroll();
    let url = window.location.href.split('/');
    let channelId = url[url.length - 1];
    this.props.getUserInfo(this.props.currentUserId)
      .then(() => {
        this.props.fetchServer(this.props.chosenServer.id)
      })
      .then(() => {
        this.props.fetchChannel(channelId)
      }) 
    
  }

  // componentDidUpdate(){
  //   this.handleScroll();
  // }

  // handleScroll() {
  //   this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth'});
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
          <div id="server-name">
            <h6>{this.props.chosenServer.name}</h6>
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
              <MessageChannel fetchChannel={this.props.fetchChannel} fetchMessages={this.props.fetchMessages} channel={this.props.chosenChannel} messages={this.props.messages} createMessage={this.props.createMessage}/>
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