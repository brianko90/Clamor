import React from 'react';
import {Link} from 'react-router-dom';


class ChannelList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {toggle: true}
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidUpdate() {
    let channels = document.getElementsByClassName('channel-item');
    channels = Array.prototype.slice.call(channels);

    let preSelected = document.getElementsByClassName('selected-channel');
    preSelected = Array.prototype.slice.call(preSelected);

    if (preSelected.length === 0) {
      channels.forEach((channel) => {
        if (channel.id === this.props.match.params.channelId) {
          channel.classList.add('selected-channel')
        }
      })
    }
  }

  handleSelect(e) {
    e.preventDefault();
    let nonSelected = document.getElementsByClassName('channel-item');
    nonSelected = Array.prototype.slice.call(nonSelected);
    nonSelected.map((ele) => {
      if(ele.classList.contains('selected-channel')) {
        ele.classList.remove('selected-channel');
      }
    })
    e.currentTarget.classList.add('selected-channel');
  }

  render() {

    return(
      <div>
        <ul id="channel-list">
          <li>TEXT CHANNELS <span id="add-class">+</span></li>
          {this.props.channels.map(channel => <li onClick={this.handleSelect} id={channel.id} className="channel-item" key={channel.id}>
                                                <Link to={`/channels/${this.props.server.id}/${channel.id}`}>
                                                  <i className="fas fa-hashtag"></i>  {channel.name.toLowerCase()}
                                                </Link>
                                              </li>)
          }
        </ul>
      </div>
    )
  }
}

export default ChannelList;

// handleSelect(e, serverId) {
//   e.preventDefault();
//   this.props.fetchServer(serverId);
//   let nonSelected = document.getElementsByClassName('server-list-item');
//   nonSelected = Array.prototype.slice.call(nonSelected);
//   nonSelected.map((ele) => {
//     if (ele.classList.contains('selected-server')) {
//       ele.classList.remove('selected-server');
//     }
//   })
//   e.currentTarget.classList.add('selected-server');
// }