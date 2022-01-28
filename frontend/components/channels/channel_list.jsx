import React from 'react';

class ChannelList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {toggle: true}
  }

  render() {

    console.log("CHANNELS", this.props.channels)
    return(
      <div>
        <ul id="channel-list">
          <li>TEXT CHANNELS <span id="add-class">+</span></li>
          {this.props.channels.map(channel => <li className="channel-item" key={channel.id}><i className="fas fa-hashtag"></i>  {channel.name.toLowerCase()}</li>)}
        </ul>
      </div>
    )
  }
}

export default ChannelList;