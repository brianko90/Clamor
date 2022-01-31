import * as MessageApiUtil from "../util/message_channel_util";
import { fetchChannel } from "../util/channel_util";

export const RECEIVE_MESSAGES = "RECEIVE MESSAGES"
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

export const receiveMessage = payload => {
  return {
    type: RECEIVE_MESSAGE,
    payload 
  }
}

const receiveMessages = payload => {
  return {
    type: RECEIVE_MESSAGES,
    payload 
  }
}

export const createMessage = message => dispatch => {
  return MessageApiUtil.createMessage(message)
}

export const fetchMessages = (channelId) => dispatch => {
  return fetchChannel(channelId)
    .then(payload => dispatch(receiveMessages(payload)))
}