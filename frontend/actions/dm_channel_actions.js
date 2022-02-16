import * as DMChannelApiUtil from '../util/dm_channel_util';
import { receiveCurrentUser } from './session_actions';

export const RECEIVE_CONVERSATION = "RECEIVE_CONVERSATION";
export const REMOVE_CONVERSATION = "REMOVE_CONVERSATION";

const receiveConversation = payload => {
  return {
    type: RECEIVE_CONVERSATION,
    payload
  }
}

const removeConversation = payload => {
  return {
    type: REMOVE_CONVERSATION,
    payload
  }
}



export const createConversation = conversation => dispatch => {
  return DMChannelApiUtil.createConversation(conversation)
    .then((payload) => dispatch(receiveCurrentUser(payload)))
}

export const getUserConversations = userId => dispatch => {
  return DMChannelApiUtil.getUserConversations(userId)
    .then((payload) => dispatch(receiveCurrentUser(payload)))
}

export const fetchConversation = (conversationId) => dispatch => {
  return DMChannelApiUtil.fetchConversation(conversationId)
    .then((payload) => dispatch(receiveConversation(payload)))
}

export const destroyConversation = (conversationId) => dispatch => {
  return DMChannelApiUtil.destroyConversation(conversationId)
    .then((payload) => dispatch(removeConversation(payload)))
}