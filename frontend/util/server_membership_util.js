export const createServerMembership = (server_membership) => {
  return $.ajax({
    method: "POST",
    url: `/api/server_memberships`,
    data: {server_membership}
  })
} 

export const destroyServerMembership = (server_membershipId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/server_memberships/${server_membershipId}`
  })
}