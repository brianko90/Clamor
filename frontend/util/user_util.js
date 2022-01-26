export const getUserInfo = userId => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}`
  })
}