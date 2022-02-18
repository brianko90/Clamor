export const fetchChannel = (channelId) => {
  return $.ajax({
    url: `/api/channels/${channelId}`,
    method: "GET"
  })
}

export const createChannel = (channel) => {
  return $.ajax({
    url: `/api/servers/${channel.server_id}/channels`,
    method: "POST",
    data: {channel}
  })
}

export const deleteChannel = (channelId) => {
  return $.ajax({
    url: `/api/channels/${channelId}`,
    method: "DELETE"
  })
}

export const updateChannel = (channel) => {
  return $.ajax({
    url: `/api/channels/${channel.id}`,
    method: `PATCH`,
    data: {channel}
  })
}
