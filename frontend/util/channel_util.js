export const fetchChannel = (serverId, channelId) => {
  return $.ajax({
    url: `/api/channels/${serverId}/${channelId}`,
    method: "GET"
  })
}