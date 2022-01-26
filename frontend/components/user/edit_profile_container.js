import React from 'react';
import { connect } from 'react-redux';
import EditProfile from './user_settings';
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = state => {
  return {
    // user: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)