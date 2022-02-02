import React from 'react';
import {Link} from 'react-router-dom';

class DMList extends React.Component {
  constructor(props) {
    super(props);
  }

  createName(conversation) {
    let shownName = '';
    let names = [];
    let membersArray = Object.values(conversation.members).filter(member => member.id !== this.props.user.id)
    Object.values(membersArray).map(member => {
      names.push(member.username);
    });
    names = names.join(', ').split('');
    if (names.length > 20) {
      while(shownName.length < 20) {
        shownName += names.shift();
      }
      shownName += '...';
      return shownName
    } else {
      return names.join('')
    }
  }

  getPfp(conversation) {
    let pfps = [];
    let members = Object.values(conversation.members).filter(member => member.id !== this.props.user.id)
    members.map(member => {
      pfps.push(member.pfp)
    });
    return pfps[0]
  }

  render() {
    if(!this.props.conversations) return null;

    return (
      <div id="dm-container">
        <div>Friends</div>
        <div>DIRECT MESSAGES <span>+</span></div>
        <ul id="dm-list">
          {this.props.conversations.map((conversation) => (
            <li key={conversation.id} className="dm-list-item">
              <Link onClick={() => this.props.fetchConversation(conversation.id)} to={`/channels/@me/${conversation.id}`}>
                <div>
                  <img className="dm-list-pfp" src={this.getPfp(conversation)} />
                  <div className="dm-list-name">{this.createName(conversation)}</div>
                </div>
                {/* {conversation.members.length > 2 ? <div>{conversation.members.length} Members</div> : ""} */}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default DMList      