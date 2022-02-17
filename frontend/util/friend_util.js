export const getUserFriends = userId => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}`
  })
}

export const createFriend = (friendship) => {
  return $.ajax({
    method: "POST",
    url: `/api/users/${friendship.user_id}/friendships`,
    data: {friendship}
  })
}

export const updateFriend = (userId, friendId) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${userId}/friendships/${friendId}`
  })
}

export const deleteFriend = (userId, friendId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/users/${userId}/friendships/${friendId}`
  })
}