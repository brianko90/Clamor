export const fetchConversation = (conversationId) => {
  return $.ajax({
    url: `/api/conversations/${conversationId}`,
    method: "GET"
  })
}

export const getUserConversations = userId => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}`
  })
}

export const createConversation = conversation => {
  return $.ajax({
    method: "POST",
    url: '/api/conversations',
    data: {conversation}
  })
}

export const destroyConversation = conversationId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/conversations/${conversationId}`
  })
}