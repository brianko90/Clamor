export const getUserFriends = userId => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}`
  })
}