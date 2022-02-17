import {connect} from 'react-redux';
import FriendList from './friend_list';
import { getUserFriends } from '../../actions/friend_actions';
import { withRouter } from 'react-router-dom';
import { fetchConversation, createConversation, destroyConversation } from '../../actions/dm_channel_actions';
import { createConversationMembership } from '../../actions/conversation_membership_actions';
import { updateFriend, deleteFriend } from '../../actions/friend_actions';

const mapStateToProps = state => {
  return {
    currentUserId: state.session.id,
    friends: Object.values(state.entities.friends),
    pending: Object.values(state.entities.incoming).concat(Object.values(state.entities.outgoing)),
    conversations: Object.values(state.entities.conversations),
    incoming: Object.values(state.entities.incoming),
    outgoing: Object.values(state.entities.outgoing)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserFriends: (userId) => dispatch(getUserFriends(userId)),
    fetchConversation: (conversationId) => dispatch(fetchConversation(conversationId)),
    createConversation: (conversation) => dispatch(createConversation(conversation)),
    createConversationMembership: (membership) => dispatch(createConversationMembership(membership)),
    destroyConversation: (conversationId) => dispatch(destroyConversation(conversationId)),
    deleteFriend: (userId, friendId) => dispatch(deleteFriend(userId, friendId)),
    updateFriend: (userId, friendId) => dispatch(updateFriend(userId, friendId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendList));