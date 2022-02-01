import * as DMApiUtil from '../util/direct_message_util';
import { fetchConversation } from '../util/dm_channel_util';

export const RECEIVE_DM = "RECEIVE_DM";
export const RECEIVE_DMS = "RECEIVE_DMS";

export const receiveDM = payload => {
  return {
    type: RECEIVE_DM,
    payload 
  }
}

export const receiveDMS = payload => {
  return {
    type: RECEIVE_DMS,
    payload 
  }
}

export const createMessage = dm => dispatch => {
  return DMApiUtil.createDM(dm)
    .then((payload) => dispatch(receiveDM(payload)))
}

export const fetchDMs = (conversationId) => dispatch => {
  return fetchConversation(conversationId)
    .then(payload => dispatch(receiveDMS(payload)))
}
