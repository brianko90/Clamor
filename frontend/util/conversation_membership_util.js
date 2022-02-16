export const createConversationMembership = (conversation_membership) => {
  return $.ajax({
    method: "POST",
    url: `/api/conversation_memberships`,
    data: {conversation_membership}
  })
} 

export const destroyConversationMembership = (conversation_membershipId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/conversation_memberships/${conversation_membershipId}`
  })
}