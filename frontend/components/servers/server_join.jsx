import React from 'react';

class ServerJoin extends React.Component {
  constructor(props) {
    super(props);

    this.checkJoined = this.checkJoined.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleJoin = this.handleJoin.bind(this);
  }

  // Need to fetch all public servers that the user is not already a part of
  // 
  componentDidMount() {
    this.props.fetchServers();
  }

  handleJoin(e, newMembership) {
    e.preventDefault();
    this.props.createServerMembership(newMembership)
      .then(() => this.props.fetchServers())
      .then(() => this.props.getUserInfo(this.props.currentUserId))
  }

  checkJoined(server) {
    let status;
    let newMembership = {user_id: this.props.currentUserId, server_id: server.id}
    if(this.props.servers.includes(server.name)) {
      status = <div className="joined-button">Joined</div>
    } else {
      status = <div className="join-button" onClick={(e) => this.handleJoin(e, newMembership)}>Join</div>
    }
    return status;
  }

  handleChange(e){
    e.preventDefault();
    this.props.closeModal()
    this.props.openModal("addServer")
  }

  render() {
    return (
      <div id="server-join-container">
        <div>
          <div className="server-head">
            <div onClick={() => this.props.closeModal()} id="server-form-close">X</div>
            <h2 className="server-join-title">Join a server</h2>
          </div>
          <p className="server-join-message">Find a public server and join their community</p>
          <ul className="join-list-container">
            {this.props.allServers.map((server, idx) => (
              <li className="join-list-item" key={idx}>
                <img className="server-join-pic" src={server.serverpic} alt="server-pic" />
                <div className="server-join-info">
                  <h2>{server.name}</h2>
                  {this.checkJoined(server)}
                </div>
              </li>
            ))}
          </ul>
          <div id="server-submit">
            <div onClick={() => this.props.closeModal()}>Cancel</div>
            <div id="join-server-button" onClick={this.handleChange}>Create Your Own Server</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ServerJoin