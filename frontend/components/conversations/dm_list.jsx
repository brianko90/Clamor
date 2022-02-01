import React from 'react';
import {Link} from 'react-router-dom';

class DMList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if(!this.props.conversations) return null;
    return (
      <div>
        <div>Friends</div>
        <ul id="dm-list">
          <li>DIRECT MESSAGES <span>+</span></li>
          {this.props.conversations.map((conversation) => {
            if(conversation.members.length > 2) {
              let names = [];
              conversation.members.map((member) => names.push(member.username))
              return <li key={conversation.id}>
                        <Link>
                          <img src={conversation.members[0].pfp} />
                          <div>{names.join(', ')}</div>
                          <div>{names.length} Members</div>
                        </Link>
                      </li>         
            } else {
              conversation.members.map((member) => {
                if(member.id !== conversation.owner_id) {
                  return <li key={conversation.id}>
                            <Link>
                              <img src={member.pfp} alt="" />
                              <div>{member.username}</div>
                            </Link>
                          </li>
                }
              })
            }
          })}
        </ul>
      </div>
    )
  }
}

export default DMList