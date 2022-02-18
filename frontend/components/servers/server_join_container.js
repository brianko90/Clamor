import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import ServerJoin from './server_join'
import {createServerMembership} from '../../actions/server_membership_actions';
import { fetchServers } from '../../actions/server_actions';
import { getUserInfo } from '../../actions/user_actions';

const getNames = (servers) => {
  let names = [];
  servers.forEach(server =>
    names.push(server.name)
  )
  return names;
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[state.session.id],
    allServers: Object.values(state.entities.allServers),
    servers: getNames(Object.values(state.entities.servers)),
    currentUserId: state.session.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createServerMembership: (membership) => dispatch(createServerMembership(membership)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchServers: () => dispatch(fetchServers()),
    getUserInfo: (userId) => dispatch(getUserInfo(userId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerJoin))