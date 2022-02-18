export const CURRENT_USER_SERVERS = "CURRENT_USER_DATA";
export const CURRENT_USER_FRIENDS = "CURRENT_USER_FRIENDS"


import * as friendApiUtil from '../util/friend_util';
import { receiveCurrentUser } from './session_actions';

const removeFriend = (payload) => {
  return {
    type: CURRENT_USER_FRIENDS,
    payload
  }
}

export const getUserFriends = userId => dispatch => {
  return friendApiUtil.getUserFriends(userId)
    .then(payload => dispatch(receiveCurrentUser(payload)))
}

export const createFriend = (friendship) => dispatch => {
  return friendApiUtil.createFriend(friendship)
    .then(payload => dispatch(receiveCurrentUser(payload)))
}

export const updateFriend = (userId, friendId) => dispatch => {
  return friendApiUtil.updateFriend(userId, friendId)
    .then(payload => dispatch(receiveCurrentUser(payload)))
}

export const deleteFriend = (userId, friendId) => dispatch => {
  return friendApiUtil.deleteFriend(userId, friendId)
    .then((payload) => dispatch(removeFriend(payload)))
}

