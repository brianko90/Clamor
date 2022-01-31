export const createMessage = message => {
  return $.ajax({
    method: "POST",
    url: `/api/channels/${message.channel_id}/messages`,
    data: {message}
  })
}