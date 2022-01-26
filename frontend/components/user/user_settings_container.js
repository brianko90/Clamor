import React from 'react';
import { connect } from 'react-redux';
import UserSettings from './user_settings';
import { openModal, closeModal } from '../../actions/modal_actions'
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    user: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = dispatch => {
  return {  
    closeModal: () => dispatch(closeModal()),
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings)