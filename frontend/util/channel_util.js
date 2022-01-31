export const fetchChannel = (channelId) => {
  return $.ajax({
    url: `/api/channels/${channelId}`,
    method: "GET"
  })
}
