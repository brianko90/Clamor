import {connect} from 'react-redux';
import ServerList from './server_list';
import {fetchServers} from '../../actions/server_actions';

const mapStateToProps = state => {
  console.log(state);
  return {
    currentUser: state.session.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchServers: () => dispatch(fetchServers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerList)