export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS '

import * as sessionApiUtil from '../util/session_api_util'

const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  }
}

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
}

export const login = user => dispatch => {
  return sessionApiUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      error => dispatch(receiveErrors(error.responseJSON)))


}

export const logout = () => dispatch => {
  return sessionApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()),
      error => dispatch(receiveErrors(error.responseJSON)))
}

export const signup = (user) => dispatch => {
  return sessionApiUtil.signup(user)
    .then((user) => dispatch(receiveCurrentUser(user)),
      error => dispatch(receiveErrors(error.responseJSON)))
}
