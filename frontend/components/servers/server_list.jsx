import React from 'react';
import { Link } from 'react-router-dom';


class ServerList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div id="server-list-container">
        <div id="main-logo">
          <div id="home-icon">
            <Link to="/channels/@me"><i className="fab fa-discord fa-1x"></i></Link>
          </div>
        </div>
        <ul id="server-list-ul">
          {this.props.servers.map(server => 
            (<li onClick={() => this.props.fetchServer(server.id)} className="server-list-item" key={server.id}>
                <Link to={`/channels/${server.id}`} ><img id="server-pic" src={server.serverpic} alt="" /></Link>     
            </li>)
          )}
          <div id="server-buttons-container">
            <div className="server-buttons">
              <div id="server-plus" onClick={() => this.props.openModal('addServer')}>+</div>
            </div>
            <div className="server-buttons">
              <i className="fas fa-compass"></i>
            </div>
          </div>
        </ul>
      </div>
    )
  }
}

export default ServerList;