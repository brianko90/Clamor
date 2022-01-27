import { connect } from 'react-redux';
import ServerForm from './server_main';
import { createServer } from '../../actions/server_actions';
import { getUserInfo } from '../../actions/user_actions';
import { openModal, closeModal } from '../../actions/modal_actions'; 

const mapStateToProps = (state, ownProps) => {
  return {
    // user: state.entities.users[state.session.id],
    // servers: Object.values(state.entities.servers),
    currentUserId: state.session.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createServer: (server) => dispatch(createServer(server)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    getUserInfo: (userId) => dispatch(getUserInfo(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerForm)