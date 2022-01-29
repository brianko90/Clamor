import React from 'react';
import { Link } from 'react-router-dom';


class ServerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {chosenChannel: ''}
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e, serverId) {
    e.preventDefault();
    this.props.fetchServer(serverId);
    let nonSelected = document.getElementsByClassName('server-list-item');
    nonSelected = Array.prototype.slice.call(nonSelected);
    nonSelected.map((ele) => {
      if (ele.classList.contains('selected-server')) {
        ele.classList.remove('selected-server');
      }
    });
    e.currentTarget.classList.add('selected-server');
  }

  componentDidUpdate() {
    let servers = document.getElementsByClassName('server-list-item');
    servers = Array.prototype.slice.call(servers);

    let preSelected = document.getElementsByClassName('selected-server');
    preSelected = Array.prototype.slice.call(preSelected);
    if (preSelected.length === 0) {
      servers.forEach((server) => {
        if (server.id === this.props.match.params.serverId) {
          server.classList.add('selected-server')
        }
      })
    }
  }

  render() {
    return (
      <div id="server-list-container">
        <div id="main-logo">
          <div className="home-icon server-list-item">
            <Link to="/channels/@me"><i className="fab fa-discord fa-1x"></i></Link>
          </div>
        </div>
        <ul id="server-list-ul">
          {this.props.servers.map(server => 
            (<li id={server.id} onClick={(e) => this.handleSelect(e, server.id)} className="server-list-item" key={server.id}>
              <Link to={`/channels/${server.id}/${server.channels[0]}`} ><img className="server-pic" src={server.serverpic} alt="" /></Link>     
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