import {connect} from 'react-redux';
import ServerMain from './server_main';
import {fetchServer} from '../../actions/server_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    //Will need to map channels of particular server to state
    // Ownprops will probably provide the server_id and maybe the channel_id
    servers: Object.values(state.entities.servers)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchServer: (serverId) => dispatch(fetchServer(serverId))
  }
}

export default connect(null, mapDispatchToProps)(ServerMain)