export const followUser = (currentUser, user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/follows',
    data: {
      follow: {
        follower_id: currentUser.id,
        followable_id: user.id,
        followable_type: 'User'
      }
    }
  });
}

export const unfollowUser = (currentUser, user) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${currentUser.id}`,
    data: {
      user: currentUser,
      follow: {
        follower_id: currentUser.id,
        followable_id: user.id,
        followable_type: 'User'
      }
    }
  });
}

export const followPlaylist = (currentUser, playlist) => {
  return $.ajax({
    method: 'POST',
    url: '/api/follows',
    data: {
      follow: {
        follower_id: currentUser.id,
        followable_id: playlist.id,
        followable_type: 'Playlist'
      }
    }
  });
}

export const unfollowPlaylist = (currentUser, playlist) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${currentUser.id}`,
    data: {
      user: currentUser,
      follow: {
        follower_id: currentUser.id,
        followable_id: playlist.id,
        followable_type: 'Playlist'
      }
    }
  });
}
