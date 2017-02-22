import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { deleteSongFromPlaylist } from './actions/playlist_actions';

window.deleteSongFromPlaylist = deleteSongFromPlaylist;

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
