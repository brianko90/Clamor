import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = (props) => {
  
  return (
    <div id="user-profile">
      <div id="pfp-name">
        <img id="user-pfp" src={props.user.pfp} alt="" />
        <div id="profile-username">{props.user.username}</div>
      </div>
      <div className="tooltip" id="profile-cog" onClick={() => props.openModal("settings")}><i className="fas fa-cog"><span class="tooltiptext">User Settings</span></i></div>
    </div>
  )
}

export default UserProfile