import { connect } from 'react-redux';
import FriendMain from './friend_main';
import { getUserFriends, deleteFriend } from '../../actions/friend_actions';
import {openModal, closeModal} from '../../actions/modal_actions'
import { fetchConversation, getUserConversations, destroyConversation } from '../../actions/dm_channel_actions';
import { fetchDMS, createDM } from '../../actions/direct_message_actions';


const mapStateToProps = (state,ownProps) => {
  return {
    user: state.entities.users[state.session.id],
    servers: Object.values(state.entities.servers),
    friends: Object.values(state.entities.friends),
    incoming: Object.values(state.entities.incoming),
    outgoing: Object.values(state.entities.outgoing),
    pending: Object.values(state.entities.incoming).concat(Object.values(state.entities.outgoing)),
    conversations: Object.values(state.entities.conversations),
    conversationMessages: Object.values(state.entities.conversationMessages),
    cableApp: ownProps.cableApp
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserFriends: (userId) => dispatch(getUserFriends(userId)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    deleteFriend: (userId, friendId) => dispatch(deleteFriend(userId, friendId)),
    fetchDMS: (conversationId) => dispatch(fetchDMS(conversationId)),
    getUserConversations: (userId) => dispatch(getUserConversations(userId)),
    fetchConversation: (conversationId) => dispatch(fetchConversation(conversationId)),
    createDM: (dm) => dispatch(createDM(dm)),
    destroyConversation: (conversationId) => dispatch(destroyConversation(conversationId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendMain)