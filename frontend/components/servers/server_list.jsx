import React from 'react';
import {Link} from 'react-router-dom';


class ServerList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id="server-list-container">
        <div>
          <i className="fab fa-discord fa-2x"></i>
        </div>
        <ul id="server-list">
          {this.props.servers.map(server => <li key={server.id}>{server.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default ServerList;