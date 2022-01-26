import React from 'react';
import {Link} from 'react-router-dom';
import ServerListContainer from './server_list_container';
import FriendListContainer from '../friends/friend_list_container';
import UserProfile from './user_profile';

const ServerMain = (props) => {
  return (
    <div id="server">
      <div id="server-list">
        <ServerListContainer servers={props.servers} />
      </div>
      <div id="server-main">
        <div id="channel-index">
          <h6>SERVER NAME GOES HERE</h6>
          <div>CHANNEL INDEX GOES HERE</div>
          <div>
            <UserProfile />
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

export default ServerMain