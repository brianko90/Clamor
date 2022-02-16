import * as ChannelApiUtil from '../util/channel_util';

export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";

const receiveChannel = payload => {
  return {
    type: RECEIVE_CHANNEL,
    payload
  }
}

const removeChannel = channelId => {
  return {
    type: REMOVE_CHANNEL,
    channelId
  }
}

const receiveErrors = errors => {
  return {
    type: RECEIVE_CHANNEL_ERRORS,
    errors
  }
}

export const fetchChannel = (channelId) => dispatch => {
  return ChannelApiUtil.fetchChannel(channelId)
    .then((channel) => dispatch(receiveChannel(channel)))
}

export const createChannel = (channel) => dispatch => {
  return ChannelApiUtil.createChannel(channel)
    .then(channel => dispatch(receiveChannel(channel)),
      error => dispatch(receiveErrors(error.responseJSON)))
}

export const updateChannel = channel => dispatch => {
  return ChannelApiUtil.updateChannel(channel)
    .then(channel => dispatch(receiveChannel(channel)),
      error => dispatch(receiveErrors(error.responseJSON)))
}

export const deleteChannel = channelId => dispatch => {
  return ChannelApiUtil.deleteChannel(channelId)
    .then(() => dispatch(removeChannel(channelId)))
}