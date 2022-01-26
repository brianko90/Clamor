import React from 'react';
import ServerListContainer from '../servers/server_list_container';
import UserProfile from '../servers/user_profile';

class FriendMain extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // if(!this.props.chosenServer) {
    //   return null;
    // }
    return (
      <div id="server">
        <div id="server-list">
          <ServerListContainer servers={this.props.servers} />
        </div>
        <div id="server-main">
          <div id="channel-index">
            <h6>Search for Convo</h6>
            <div>List of DM's</div>
            <div>
              <UserProfile user={this.props.user}/>
            </div>
          </div>
          <div id="server-nav-chat-friend">
            <div id="server-main-top">
              <h6>Friend Nav Bar</h6>
              <div>All friends tab, and pending friends tab</div>
            </div>
            <div id="server-main-bottom">
              <div id="server-main-center">
                <div>List of friends depending on tab</div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FriendMain