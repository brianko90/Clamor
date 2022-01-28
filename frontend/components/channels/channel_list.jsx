import React from 'react';

class ChannelList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {toggle: true}
  }

  // componentDidMount() {
  //   this.props.fetchServer(this.props.serverId);
  // }

  render() {

    console.log("CHANNELS", this.props.channels)
    return(
      <div id="channel-list">
        <div>TEXT CHANNELS</div>
        <div>
          {
            this.state.toggle &&
            <div>
              {this.props.channels.map(channel => <li key={channel.id}>{channel.name}</li>)}
            </div>
          }
        </div>
      </div>
    )
  }
}

export default ChannelList;