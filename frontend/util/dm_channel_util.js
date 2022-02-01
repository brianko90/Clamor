export const fetchConversation = (conversationId) => {
  return $.ajax({
    url: `/api/conversations/${conversationId}`,
    method: "GET"
  })
}