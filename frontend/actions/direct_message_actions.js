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

export const createDM = (conversationId, dm) => dispatch => {
  return DMApiUtil.createDM(conversationId, dm)
}

export const fetchDMS = (conversationId) => dispatch => {
  return fetchConversation(conversationId)
    .then(payload => dispatch(receiveDMS(payload)))
}
