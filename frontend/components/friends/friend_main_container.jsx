import { connect } from 'react-redux';
import FriendMain from './friend_main';
import { getUserFriends, removeFriend } from '../../actions/friend_actions';
import {openModal, closeModal} from '../../actions/modal_actions'

const mapStateToProps = state => {
  return {
    user: state.entities.users[state.session.id],
    servers: Object.values(state.entities.servers),
    friends: Object.values(state.entities.friends),
    incoming: Object.values(state.entities.incoming),
    outgoing: Object.values(state.entities.outgoing)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserFriends: (userId) => dispatch(getUserFriends(userId)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    removeFriend: (userId, friendId) => dispatch(removeFriend(userId, friendId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendMain)