import { connect } from 'react-redux';
import React from 'react';
import SignupForm from './signup_form';
import {  signup } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user))
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)

