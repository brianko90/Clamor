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