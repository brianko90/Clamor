import * as ChannelApiUtil from '../util/channel_util';

export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";

const receiveChannel = payload => {
  return {
    type: RECEIVE_CHANNEL,
    payload
  }
}

export const fetchChannel = (serverId, channelId) => dispatch => {
  return ChannelApiUtil.fetchChannel(serverId, channelId)
    .then((channel) => dispatch(receiveChannel(channel)))
}