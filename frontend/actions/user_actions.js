export const CURRENT_USER_SERVERS = "CURRENT_USER_DATA";

import * as userApiUtil from '../util/user_util';
import { receiveCurrentUser } from './session_actions';


export const getUserInfo = userId => dispatch => {
  return userApiUtil.getUserInfo(userId)
    .then(payload => dispatch(receiveCurrentUser(payload)))
}

export const deleteUser = userId => dispatch => {
  return userApiUtil.deleteUser(userId)
}

export const updateUser = user => dispatch => {
  return userApiUtil.updateUser(user)
    .then((payload) => dispatch(receiveCurrentUser(payload)))
}
