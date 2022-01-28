import React from 'react';

class ServerMembersList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ul id="members-list">
          <li>Members - {this.props.serverMembers.length}</li>
          {this.props.serverMembers.map(member => <li className="member-item" key={member.id}>
                                                    <img src={member.pfp} alt="" />
                                                    <span>{member.username}</span>
                                                  </li>)}
        </ul>
      </div>
    )
  }
}

export default ServerMembersList