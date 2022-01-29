import {connect} from 'react-redux';
import ServerList from './server_list';
import {fetchServer} from '../../actions/server_actions';
import {getUserInfo} from '../../actions/user_actions';

const mapStateToProps = state => {
  return {
    currentUserId: state.session.id,
    channels: Object.values(state.entities.serverChannels)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserInfo: (userId) => dispatch(getUserInfo(userId)),
    fetchServer: (serverId) => dispatch(fetchServer(serverId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerList)