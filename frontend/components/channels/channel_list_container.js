import { connect } from 'react-redux';
import ChannelList from './channel_list'
import { fetchServer } from '../../actions/server_actions';
import { getUserInfo } from '../../actions/user_actions';
// import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[state.session.id],
    currentUserId: state.session.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // fetchServer: (serverId) => dispatch(fetchServer(serverId)),
    getUserInfo: (userId) => dispatch(getUserInfo(userId)),
    fetchChannel: (serverId, channelId) => dispatch(fetchChannel(serverId, channelId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList)