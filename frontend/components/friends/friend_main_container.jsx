import { connect } from 'react-redux';
import FriendMain from './friend_main';
import { getUserFriends } from '../../actions/friend_actions';

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

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendMain)