import { connect } from 'react-redux';
import ServerForm from './server_form';
import { createServer, fetchServer } from '../../actions/server_actions';
import { getUserInfo } from '../../actions/user_actions';
import { openModal, closeModal } from '../../actions/modal_actions'; 
import { withRouter } from 'react-router-dom';
import { fetchMessages } from '../../actions/message_channel_actions';
import { fetchChannel } from '../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[state.session.id],
    servers: Object.values(state.entities.servers),
    currentUserId: state.session.id,
    errors: state.errors.server
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createServer: (server) => dispatch(createServer(server)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    getUserInfo: (userId) => dispatch(getUserInfo(userId)),
    fetchMessages: (channelId) => dispatch(fetchMessages(channelId)),
    fetchServer: (serverId) => dispatch(fetchServer(serverId)),
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerForm))