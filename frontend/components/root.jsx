import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Splash from './splash/splash';
import WebPlayer from './web-player';
import Browse from './browse/browse_container';
import ArtistDetail from './browse/artist_detail_container';
import AlbumDetail from './browse/album_detail_container';
import PlaylistDetail from './playlists/playlist_detail_container';
import PlayQueue from './play_queue/play_queue_container';
import Collection from './collection/collection_container';
import Follow from './follow/follow_container';
import UserDetail from './follow/user_detail_container';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) replace("/browse");
  };

  const _redirectUnlessLoggedIn = (nextState, replace) => {
    if (!store.getState().session.currentUser) replace("/");
  };

  const _redirectIfNotCurrentUser = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser
    if (nextState.params.userId != currentUser.id) {
      _redirectIfLoggedIn(nextState, replace);
      _redirectUnlessLoggedIn(nextState, replace);
    }
  }

  const _redirectIfCurrentUser = (nextState, replace) => {
    _redirectUnlessLoggedIn(nextState, replace);
    const currentUser = store.getState().session.currentUser
    if (nextState.params.userId == currentUser.id) {
      replace(`users/${currentUser.id}/collection`);
    }
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Splash } onEnter={ _redirectIfLoggedIn } />
          <Route component={ WebPlayer } onEnter={ _redirectUnlessLoggedIn }>
            <Route path="/browse" component={ Browse } onEnter={ _redirectUnlessLoggedIn } />
            <Route path="/artists/:artistId" component={ ArtistDetail } onEnter={ _redirectUnlessLoggedIn } />
            <Route path="/artists/:artistId/albums/:albumId" component={ AlbumDetail } onEnter={ _redirectUnlessLoggedIn } />
            <Route path="/users/:userId/playlists/:playlistId" component={ PlaylistDetail } onEnter={ _redirectUnlessLoggedIn } />
            <Route path="/queue" component={ PlayQueue } onEnter={ _redirectUnlessLoggedIn } />
            <Route path="/users/:userId/collection" component={ Collection } onEnter={ _redirectIfNotCurrentUser } />
            <Route path="/follow" component={ Follow } onEnter={ _redirectUnlessLoggedIn } />
            <Route path="/users/:userId" component={ UserDetail } onEnter={ _redirectIfCurrentUser } />
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
