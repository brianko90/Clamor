import React from 'react';
import {Link} from 'react-router-dom';


class ChannelList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {toggle: true}
  }

  render() {

    return(
      <div>
        <ul id="channel-list">
          <li>TEXT CHANNELS <span id="add-class">+</span></li>
          {this.props.channels.map(channel => <li className="channel-item" key={channel.id}><Link to={`/channels/${this.props.server.id}/${channel.id}`}><i className="fas fa-hashtag"></i>  {channel.name.toLowerCase()}</Link></li>)}
        </ul>
      </div>
    )
  }
}

export default ChannelList;