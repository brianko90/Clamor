import { connect } from 'react-redux';
import ChannelList from './channel_list'
import { fetchServer } from '../../actions/server_actions';
import { getUserInfo } from '../../actions/user_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[state.session.id],
    // channels: Object.values(state.entities.serverChannels),
    currentUserId: state.session.id,
    // chosenServer: state.entities.servers[ownProps.match.params.serverId]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchServer: (serverId) => dispatch(fetchServer(serverId)),
    getUserInfo: (userId) => dispatch(getUserInfo(userId)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList)