export const getUserFriends = userId => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}`
  })
}

export const deleteFriend = (userId, friendId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/users/${userId}/friendships/${friendId}`
  })
}