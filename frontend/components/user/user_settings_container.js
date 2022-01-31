import React from 'react';
import { connect } from 'react-redux';
import UserSettings from './user_settings';
import { openModal, closeModal } from '../../actions/modal_actions'
import { logout } from '../../actions/session_actions';
import { updateUser, deleteUser } from '../../actions/user_actions';

const mapStateToProps = state => {
  return {
    user: state.entities.users[state.session.id],
    modal: state.ui.modal
  }
}

const mapDispatchToProps = dispatch => {
  return {  
    closeModal: () => dispatch(closeModal()),
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
    updateUser: (user) => dispatch(updateUser(user)),
    deleteUser: (userId) => dispatch(deleteUser(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings)