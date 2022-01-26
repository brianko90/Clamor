import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = (props) => {
  console.log(props)
  return (
    <div id="user-profile">
      <div>{props.user.username}</div>
      <button onClick={() => props.openModal('settings')}><i className="fas fa-cog"></i></button>
    </div>
  )
}

export default UserProfile