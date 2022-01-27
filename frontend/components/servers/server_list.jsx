import React from 'react';
import { Link } from 'react-router-dom';


class ServerList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div id="server-list-container">
        <div id="home-icon">
          <i className="fab fa-discord fa-2x"></i>
        </div>
        <ul id="server-list-ul">
          {this.props.servers.map(server => <li className="server-list-item" key={server.id}><Link to={`/channels/${server.id}`} >{server.name}</Link></li>)}
          <div id="server+" onClick={() => this.props.openModal('addServer')}>+</div>
        </ul>
      </div>
    )
  }
}

export default ServerList;