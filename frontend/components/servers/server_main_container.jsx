import {connect} from 'react-redux';
import ServerMain from './server_main';
import {fetchServer} from '../../actions/server_actions';
import {fetchChannel} from '../../actions/channel_actions';
import { getUserInfo } from '../../actions/user_actions';
import {openModal, closeModal} from '../../actions/modal_actions'; 
import { fetchMessages, createMessage } from '../../actions/message_channel_actions';
import { receiveMessage } from '../../actions/message_channel_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[state.session.id],
    servers: Object.values(state.entities.servers),
    currentUserId: state.session.id,
    chosenServer: state.entities.servers[ownProps.match.params.serverId],
    serverMembers: Object.values(state.entities.serverMembers),
    channels: Object.values(state.entities.serverChannels),
    chosenChannel: state.entities.serverChannels[ownProps.match.params.channelId],
    messages: Object.values(state.entities.channelMessages),
    cableApp: ownProps.cableApp

  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchServer: (serverId) => dispatch(fetchServer(serverId)),
    getUserInfo: (userId) => dispatch(getUserInfo(userId)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
    fetchMessages: (channelId) => dispatch(fetchMessages(channelId)),
    createMessage: (channelId, message) => dispatch(createMessage(channelId, message)),
    receiveMessage: (message) => dispatch(receiveMessage(message))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ServerMain)