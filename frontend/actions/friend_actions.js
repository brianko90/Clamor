export const CURRENT_USER_SERVERS = "CURRENT_USER_DATA";

import * as friendApiUtil from '../util/friend_util';
import { receiveCurrentUser } from './session_actions';

export const getUserFriends = userId => dispatch => {
  return friendApiUtil.getUserFriends(userId)
    .then(payload => dispatch(receiveCurrentUser(payload)))
}