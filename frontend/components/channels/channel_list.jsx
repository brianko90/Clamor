import React from 'react';
import {Link} from 'react-router-dom';


class ChannelList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {name: '', server_id: this.props.match.params.serverId, id: '', errors: []}

    this.handleSelect = this.handleSelect.bind(this);
    this.createChannel = this.createChannel.bind(this);
    this.updateChannel = this.updateChannel.bind(this);
    this.deleteChannel = this.deleteChannel.bind(this);
    this.updateModalOpen = this.updateModalOpen.bind(this);
    this.updateModalClose = this.updateModalClose.bind(this);
    this.createModalClose = this.createModalClose.bind(this);
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

  handleSelect(e, channelId) {
    e.preventDefault();
    this.props.fetchMessages(channelId)
      .then(() => {
        this.props.history.push(`/channels/${this.props.server.id}/${channelId}`)
      })
    let nonSelected = document.getElementsByClassName('channel-item');
    nonSelected = Array.prototype.slice.call(nonSelected);
    nonSelected.map((ele) => {
      if(ele.classList.contains('selected-channel')) {
        ele.classList.remove('selected-channel');
      }
    })
    e.currentTarget.classList.add('selected-channel');
  }

  checkOwner(channelId) {
    let permission = [];
    if(this.props.server.owner_id === this.props.currentUserId) {
      permission.push(<li>TEXT CHANNELS <span onClick={this.createModalOpen} id="add-class">+</span></li>);
      permission.push(<i className="fas fa-cog channel-cog" onClick={() => this.updateModalOpen(channelId)} />)
    } else {
      permission.push(<li>TEXT CHANNELS</li>);
      permission.push('');
    }
    return permission;
  }

  updateModalOpen(channelId) {
    let modal = document.getElementById('updateChannelModal');
    modal.style.display = "flex";
    this.setState({id: channelId})
  }

  updateModalClose() {
    let modal = document.getElementById('updateChannelModal');
    modal.style.display = "none";
    this.setState({errors: []})
  }

  createModalOpen() {
    let modal = document.getElementById('createChannelModal');
    modal.style.display = "flex";
  }

  createModalClose() {
    let modal = document.getElementById('createChannelModal');
    modal.style.display = "none";
    this.setState({errors: [], name: ""})
  }

  createChannel(e) {
    e.preventDefault();
    let newChannel = {name: this.state.name, server_id: this.props.match.params.serverId, errors: [], id: ""}
    this.props.createChannel(newChannel).fail(()=> this.setState({errors: this.props.errors}))
      .then(() => {
        this.props.fetchServer(this.props.match.params.serverId);
        this.createModalClose()
      })
  }

  deleteChannel(e) {
    e.preventDefault();
    this.props.deleteChannel(this.state.id)
      .then(() => {
        this.props.fetchServer(this.props.match.params.serverId)
        this.updateModalClose();
      })
  }

  updateChannel(e) {
    e.preventDefault();
    let edit = {name: this.state.name, server_id: this.props.match.params.serverId, errors: this.state.errors, id: this.props.match.params.channelId}
    this.props.updateChannel(edit).fail(() => this.setState({errors: this.props.errors}))
      .then(() => {
        this.props.fetchServer(this.props.match.params.serverId)
        this.updateModalClose();
        this.setState({name: ''})
      })
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value})
  }

  checkError() {
    return this.state.errors.length > 0 ? (<div className="channel-error">Channel name cannot be blank</div>) : ("")
  }

  render() {

    return(
      <div>
        <div id="updateChannelModal" className="modal">
          <div className="server-modal-content">
            <div className="server-header">Update your channel</div>
            <p>Change your channel name or delete channel</p>
            <form>
              <input type="text" value={this.state.name} onChange={this.update("name")}/>
              {this.checkError()}
              <div className="channel-modal-buttons">
                <div onClick={this.updateModalClose}>Cancel</div>
                <button className="channel-button" onClick={this.updateChannel}>Update Channel</button>
              </div>
            </form>
            <button className="delete-channel" onClick={this.deleteChannel}>Delete Channel</button>
          </div>
        </div>
        <div id="createChannelModal" className="modal">
          <div className="server-modal-content">
            <div className="server-header">Create a channel</div>
            <p>Give your channel a name</p>
            <form onSubmit={this.createChannel}>
              <input type="text" value={this.state.name} onChange={this.update("name")}/>
              {this.checkError()}
              <div className="channel-modal-buttons">
                <div onClick={this.createModalClose}>Cancel</div>
                <button className="channel-button" onClick={this.createChannel}>Create Channel</button>
              </div>
            </form>
          </div>
        </div>
        <ul id="channel-list">
          {this.checkOwner()[0]}
          {this.props.channels.map(channel => 
            <li onClick={(e) => this.handleSelect(e, channel.id)} key={channel.id} id={channel.id} className="channel-item">
              {/* <li className="channel-item"> */}
                <i className="fas fa-hashtag"></i>  {channel.name.toLowerCase()}
                {this.checkOwner(channel.id)[1]}
              {/* </li> */}
            </li>)
          }
        </ul>
      </div>
    )
  }
}

export default ChannelList;
