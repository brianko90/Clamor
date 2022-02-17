export const createDM = (conversationId, direct_message) => {
  return $.ajax({
    method: "POST",
    url: `/api/conversations/${conversationId}/direct_messages`,
    data: {direct_message}
  })
}

export const updateDM = direct_message => {
  return $.ajax({
    method: "PATCH",
    url: `/api/direct_messages/${direct_message.id}`,
    data: {direct_message}
  })
}

export const removeDM = direct_message => {
  return $.ajax({
    method: "DELETE",
    url: `/api/direct_messages/${direct_message.id}`,
    data: {direct_message}
  })
}