import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = (props) => {
  
  return (
    <div id="user-profile">
      <div id="pfp-name">
        <img id="user-pfp" src={props.user.pfp} alt="" />
        <div id="username-info">
          <div id="profile-username">{props.user.username}</div>
          <div id="user-tag">#{props.user.tag}</div>
        </div>
      </div>
      <div id="profile-cog" onClick={() => props.openModal("settings")}><i className="tooltip fas fa-cog"><span className="tooltiptext">User Settings</span></i></div>
    </div>
  )
}

export default UserProfile