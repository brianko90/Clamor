import {connect} from 'react-redux';
import ServerList from './server_list';
import {fetchServer} from '../../actions/server_actions';
import {getUserInfo} from '../../actions/user_actions';
import { fetchMessages } from '../../actions/message_channel_actions';


const mapStateToProps = state => {
  return {
    currentUserId: state.session.id,
    channels: Object.values(state.entities.serverChannels),
    servers: Object.values(state.entities.servers)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserInfo: (userId) => dispatch(getUserInfo(userId)),
    fetchServer: (serverId) => dispatch(fetchServer(serverId)),
    fetchMessages: (channelId) => dispatch(fetchMessages(channelId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerList)