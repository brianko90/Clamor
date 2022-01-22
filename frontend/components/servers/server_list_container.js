import {connect} from 'react-redux';
import ServerList from './server_list';
import {fetchServers} from '../../actions/server_actions';

const mSTP = state => {
  return {
    servers: Object.values(state.servers)
  }
}

const mDTP = dispatch => {
  return {
    fetchServers: () => dispatch(fetchServers())
  }
}

export default connect(mSTP, mDTP)(ServerList)