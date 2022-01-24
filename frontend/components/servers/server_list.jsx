import React from 'react';
import {Link} from 'react-router-dom';


class ServerList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <ul>
          {/* {this.props.servers.map(server => <Link to="/">{server.name}</Link>)} */}
        </ul>
      </div>
    )
  }
}

export default ServerList;