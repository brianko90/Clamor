import React from 'react';

class ServerMembersList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.serverMembers.map(member => <li className="member-item" key={member.id}>{member.username}</li>)}
        </ul>
      </div>
    )
  }
}

export default ServerMembersList