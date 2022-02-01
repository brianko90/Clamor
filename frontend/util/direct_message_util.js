export const createDM = dm => {
  return $.ajax({
    method: "POST",
    url: `/api/conversations/${dm.conversation_id}/direct_messages`,
    data: {dm}
  })
}

export const updateDM = dm => {
  return $.ajax({
    method: "PATCH",
    url: `/api/direct_messages/${dm.id}`,
    data: {dm}
  })
}

export const removeDM = dmId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/direct_messages/${dmId}`
  })
}