import {connect} from 'react-redux';
import FriendList from './friend_list';
import { getUserFriends } from '../../actions/friend_actions';


const mapStateToProps = state => {
  console.log('TESTESTEST', state);
  return {
    currentUserId: state.session.id,
    friends: Object.values(state.entities.friends)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserFriends: (userId) => dispatch(getUserFriends(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendList)