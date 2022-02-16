import { connect } from 'react-redux';
import ChannelList from './channel_list'
import { fetchServer } from '../../actions/server_actions';
import { getUserInfo } from '../../actions/user_actions';
import { createChannel, deleteChannel, updateChannel } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[state.session.id],
    currentUserId: state.session.id,
    errors: state.errors.channel
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchServer: (serverId) => dispatch(fetchServer(serverId)),
    getUserInfo: (userId) => dispatch(getUserInfo(userId)),
    fetchChannel: (serverId, channelId) => dispatch(fetchChannel(serverId, channelId)),
    createChannel: (channel) => dispatch(createChannel(channel)),
    updateChannel: (channel) => dispatch(updateChannel(channel)),
    deleteChannel: (channelId) => dispatch(deleteChannel(channelId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelList));