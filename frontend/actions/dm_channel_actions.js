import * as DMChanelApiUtil from '../util/dm_channel_util';

export const RECEIVE_CONVERSATION = "RECEIVE_CONVERSATION";

const receiveConversation = payload => {
  return {
    type: RECEIVE_CONVERSATION,
    payload
  }
}

export const fetchConversation = (conversationId) => dispatch => {
  return DMChanelApiUtil.fetchConversation(conversationId)
    .then((payload) => dispatch(receiveConversation(payload)))
}