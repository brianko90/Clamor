export const createMessage = (message) => {
  return $.ajax({
    method: "POST",
    url: `/api/channels/${message.channel_id}/messages`,
    data: {message}
  })
}

export const updateMessage = message => {
  return $.ajax({
    method: "PATCH",
    url: `/api/messages/${message.id}`,
    data: {message}
  })
}

export const removeMessage = message => {
  return $.ajax({
    method: "DELETE",
    url: `/api/messages/${message.id}`,
    data: {message}
  })
}