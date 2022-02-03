import {connect} from 'react-redux';
import FriendList from './friend_list';
import { getUserFriends } from '../../actions/friend_actions';


const mapStateToProps = state => {
  return {
    currentUserId: state.session.id,
    friends: Object.values(state.entities.friends),
    pending: Object.values(state.entities.incoming).concat(Object.values(state.entities.outgoing))
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserFriends: (userId) => dispatch(getUserFriends(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendList)