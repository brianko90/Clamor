import * as DMChanelApiUtil from '../util/dm_channel_util';
import { receiveCurrentUser } from './session_actions';

export const RECEIVE_CONVERSATION = "RECEIVE_CONVERSATION";

const receiveConversation = payload => {
  return {
    type: RECEIVE_CONVERSATION,
    payload
  }
}

export const getUserConversations = userId => dispatch => {
  return DMChanelApiUtil.getUserConversations(userId)
    .then((payload) => dispatch(receiveCurrentUser(payload)))
}

export const fetchConversation = (conversationId) => dispatch => {
  return DMChanelApiUtil.fetchConversation(conversationId)
    .then((payload) => dispatch(receiveConversation(payload)))
}