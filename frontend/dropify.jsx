import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { followUser, unfollowUser, followPlaylist, unfollowPlaylist } from './util/follow_api_util';
import { fetchUser, fetchUsers } from './actions/user_actions';

window.followUser = followUser;
window.unfollowUser = unfollowUser;
window.followPlaylist = followPlaylist;
window.unfollowPlaylist = unfollowPlaylist;
window.fetchUser = fetchUser;
window.fetchUsers = fetchUsers;

document.addEventListener('DOMContentLoaded', () => {
  let store;
    if (window.currentUser) {
      const preloadedState = { session: { currentUser: window.currentUser } };
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }

  window.store = store;

  const rootEl = document.getElementById('content');
  ReactDOM.render(<Root store={ store } />, rootEl);
});
