import {connect} from 'react-redux';
import ServerList from './server_list';
import {fetchServers} from '../../actions/server_actions';
import {getUserInfo} from '../../actions/user_actions';

const mapStateToProps = state => {
  return {
    currentUserId: state.session.id,
    servers: Object.values(state.entities.servers)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserInfo: (userId) => dispatch(getUserInfo(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerList)