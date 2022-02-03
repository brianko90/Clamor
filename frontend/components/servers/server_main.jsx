import React from 'react';
import ServerListContainer from './server_list_container';
import UserProfile from './user_profile';
import ChannelListContainer from '../channels/channel_list_container';
import ServerMembersList from './server_members';
import MessageChannel from '../messagesChannel/message_channel';

class ServerMain extends React.Component {

  constructor(props) {
    super(props);
    this.state = { name: '', public: '', owner_id: '' };
    this.deleteServer = this.deleteServer.bind(this);
    this.updateServer = this.updateServer.bind(this);
  }

  componentDidMount() {
    let serverId = this.props.match.params.serverId;
    this.props.getUserInfo(this.props.currentUserId)
      .then(() => {
        this.props.fetchServer(serverId)
      })
  }

  deleteModalOpen() {
    let modal = document.getElementById('deleteModal');
    modal.style.display = "flex";
  }

  deleteModalClose() {
    let modal = document.getElementById('deleteModal');
    modal.style.display = "none";
  }

  updateModalOpen() {
    let modal = document.getElementById('updateModal');
    modal.style.display = "flex";
  }

  updateModalClose() {
    let modal = document.getElementById('updateModal');
    modal.style.display = "none";
  }

  leaveModalOpen() {
    let modal = document.getElementById('leaveModal');
    modal.style.display = "flex";
  }

  leaveModalClose() {
    let modal = document.getElementById('leaveModal');
    modal.style.display = "none";
  }

  deleteServer(e) {
    e.preventDefault();
    this.deleteModalClose()
    this.props.deleteServer(this.props.match.params.serverId)
      .then(() => this.props.history.push('/channels/@me'))
  }

  updateServer(e) {
    e.preventDefault();
    this.updateModalClose()
    let server = { id: this.props.chosenServer.id, name: this.state.name, public: this.props.chosenServer.public, owner_id: this.props.currentUserId}
    this.props.updateServer(server)
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value})
  }

  dropdown(e) {
    e.preventDefault();
    let settings = document.getElementById("server-dropdown");

    if (settings.classList.contains("show-server")) {
      settings.classList.remove("show-server")
    } else {
      settings.classList.add("show-server")
    }
  }

  checkOwner() {
    if(this.props.chosenServer.owner_id !== this.props.currentUserId) {
      return (
        <div id="server-dropdown" className="server-drop-content">
          <div onClick={this.leaveModalOpen}>Leave Server<i className="fas fa-arrow-circle-left"></i></div>
        </div>
      )
    } else {
      return (
        <div id="server-dropdown" className="server-drop-content">
          <div className="edit-server" onClick={this.updateModalOpen}>Edit Server<i className="fas fa-pencil-alt"></i></div>
          <div onClick={this.deleteModalOpen}>Delete Server<i className="fas fa-minus-circle"></i></div>
        </div>
      )
    }
  }

  render() {
    if (!this.props.chosenServer) {
      return null;
    }
  
    return (
      <div id="server">
        <div id="deleteModal" className="modal">
          <div className="server-modal-content">
            <div className="server-header">Delete '{this.props.chosenServer.name}'</div>
            <div className="server-question" >Are you sure you want to delete <span>{this.props.chosenServer.name}</span>?</div>
            <div className="server-modal-buttons">
              <div onClick={this.deleteModalClose}>Cancel</div>
              <button onClick={this.deleteServer}>Delete Server</button>
            </div>
          </div>
        </div>
        <div id="leaveModal" className="modal">
          <div className="server-modal-content">
            <div className="server-header">Leave '{this.props.chosenServer.name}'</div>
            <div className="server-question">Are you sure you want to leave <span>{this.props.chosenServer.name}</span>?</div>
            <div className="server-modal-buttons">
              <div onClick={this.leaveModalClose}>Cancel</div>
              <button>Leave Server</button>
            </div>
          </div>
        </div>
        <div id="updateModal" className="modal">
          <div className="server-modal-content">
            <div className="server-header">Change server name</div>
            <form>
              <input type="text" value={this.state.name} onChange={this.update("name")}/>
              <div className="server-modal-buttons">
                <div onClick={this.updateModalClose}>Cancel</div>
                <button onClick={this.updateServer}>Update Server</button>
              </div>
            </form>
          </div>
        </div>
        <div id="joinServerModal" className="modal">
          <div className="server-join-content">
            <div className="server-join-header">Change server name</div>
            <form>
              <input type="text" value={this.state.name} onChange={this.update("name")} />
              <div className="server-join-buttons">
                <div onClick={this.updateModalClose}>Cancel</div>
                <button onClick={this.updateServer}>Join Server</button>
              </div>
            </form>
          </div>
        </div>
        <div id="server-list">
          <ServerListContainer match={this.props.match} channel={this.props.chosenChannel} fetchMessages={this.props.fetchMessages} chosenServer={this.props.chosenServer.name.toLowerCase()} openModal={this.props.openModal} closeModal={this.props.closeModal}/>
        </div>
        <div id="channel-index">
          <div id="server-name" className="serverButton" onClick={this.dropdown}>
            <h6>{this.props.chosenServer.name}</h6>
            <i className="fas fa-chevron-down"></i>
            {this.checkOwner()}
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