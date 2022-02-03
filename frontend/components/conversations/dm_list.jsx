import React from 'react';
import {Link} from 'react-router-dom';

class DMList extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this)
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

  handleSelect(e, conversation) {
    e.preventDefault();
    this.props.fetchConversation(conversation.id)
    this.handleHighlight(e);
  }

  handleHighlight(e) {
    let nonSelected = document.getElementsByClassName('dm-list-item');
    nonSelected = Array.prototype.slice.call(nonSelected);
  
    nonSelected.map((ele) => {
      if (ele.classList.contains('selected-dm')) {
        ele.classList.remove('selected-dm');
      }
    });
    e.currentTarget.classList.add('selected-dm');
  }

  componentDidUpdate() {
    let dms = document.getElementsByClassName('dm-list-item');
    dms = Array.prototype.slice.call(dms);

    let preSelected = document.getElementsByClassName('selected-dm');
    preSelected = Array.prototype.slice.call(preSelected);

    if(!this.props.match.params.conversationId) {
      dms[0].classList.add('selected-dm')
    }
    if(preSelected.length === 0) {
      dms.map((dm) => {
        if(dm.id === this.props.match.params.conversationId) {
          dm.classList.add('selected-dm')
        }
      })
    } 

  }

  render() {
    if(!this.props.conversations) return null;

    return (
      <div id="dm-container">
        <ul id="dm-list-items">
          <li className="dm-friend dm-list-item" onClick={this.handleHighlight}><Link to="/channels/@me"><i className="fas fa-users"></i><span id="dm-list-friendtab">Friends</span></Link></li>
          <div id="dm-message-plus">DIRECT MESSAGES <span>+</span></div>
          {this.props.conversations.map((conversation) => (
            <li id={conversation.id} key={conversation.id} className="dm-list-item" onClick={(e) => this.handleSelect(e, conversation)}>
              <Link to={`/channels/@me/${conversation.id}`}>
                <div>
                  <img className="dm-list-pfp" src={this.getPfp(conversation)} />
                  <div className="dm-list-name">{this.createName(conversation)}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default DMList      