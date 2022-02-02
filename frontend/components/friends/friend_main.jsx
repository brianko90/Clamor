import React from 'react';
import ServerListContainer from '../servers/server_list_container';
import UserProfile from '../servers/user_profile';
import FriendListContainer from './friend_list_container';
import DMList from '../conversations/dm_list';
import DMChannelContainer from '../conversations/dm_channel_container';

class FriendMain extends React.Component {
  constructor(props) {
    super(props)
    this.state = {pending: false}
  }

  componentDidMount() {
    this.props.getUserFriends(this.props.user.id)
      .then(() => {
        this.props.getUserConversations(this.props.user.id)
      })
  }

  handleSelect(e) {
    e.preventDefault();
    let notSelected = document.getElementsByClassName('friend-nav');
    notSelected = Array.prototype.slice.call(notSelected);
    notSelected.map((ele) => {
      if(ele.classList.contains('selected-tab')) ele.classList.remove('selected-tab');
    });
    e.currentTarget.classList.add('selected-tab')
  }

  render() {
    if(!this.props.servers || !this.props.friends) {
      return null;
    }
    let mainComponent;
    if(!this.props.match.params.conversationId) {
      mainComponent = <FriendListContainer pendingStatus={this.state.pending} deleteFriend={this.props.deleteFriend} friends={this.props.friends} pending={this.props.incoming.concat(this.props.outgoing)} />;
    } else {
      mainComponent = <DMChannelContainer match={this.props.match} cableApp={this.props.cableApp} />;
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
            <DMList user={this.props.user} fetchConversation={this.props.fetchConversation} conversations={this.props.conversations}/>
          </div>
          <div id="profile">
            <UserProfile user={this.props.user} openModal={this.props.openModal} closeModal={this.props.closeModal} />
          </div>
        </div>
        <div id="friend-main">
          <div id="friend-main-top">

            {
              this.props.match.params.conversationId && 

              <div>
                <h6><i className="fas fa-user-friends"></i> <span>Direct Message</span></h6>
              </div>
            }
            {
              !this.props.match.params.conversationId && 
              <div id="friend-header">
                <h6><i className="fas fa-user-friends"></i> <span>Friends</span></h6>
                <div id="friend-option">
                  <div className="friend-nav selected-tab" onClick={(e) => { this.setState({ pending: false }); this.handleSelect(e)}}>All</div>
                  <div className="friend-nav" onClick={(e) => {this.setState({ pending: true }); this.handleSelect(e)}}>Pending</div>
                </div>
              </div>
            }
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
            {mainComponent}
          </div>
        </div>
      </div>
    )
  }
}

export default FriendMain