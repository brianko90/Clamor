import React from 'react';
import {Link} from 'react-router-dom';
import ServerListContainer from './server_list_container';

const ServerMain = (props) => {
  return (
    <div>
      <div id="server-list">
        <ServerListContainer servers={props.servers} />
      </div>
      <div id="server-main">
        <div id="server-main-left">
          <h6>SERVER NAME GOES HERE</h6>
          {/* <CHANNELINDEX></CHANNELINDEX> */}
          <div>CHANNEL INDEX GOES HERE</div>
        </div>
        <div id="server-main-center">
          <h6>Channel Name goes here</h6>
          <div>CHATBOX GOES HERE</div>
          <div>CHAT TYPE INPUT GOES HERE</div>
        </div>
        <div id="server-main-right">
          <div>FriendList GOES HERE</div>
        </div>
      </div>
    </div>
  )
}

export default ServerMain