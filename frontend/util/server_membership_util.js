export const createServerMembership = (membership) => {
  return $.ajax({
    method: "POST",
    url: `/api/server_memberships`,
    data: {membership}
  })
} 

export const destroyServerMembership = (membershipId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/serer_memberships/${membershipId}`
  })
}