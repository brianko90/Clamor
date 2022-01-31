import * as ChannelApiUtil from '../util/channel_util';

export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";

const receiveChannel = payload => {
  return {
    type: RECEIVE_CHANNEL,
    payload
  }
}

export const fetchChannel = (channelId) => dispatch => {
  return ChannelApiUtil.fetchChannel(channelId)
    .then((channel) => dispatch(receiveChannel(channel)))
}