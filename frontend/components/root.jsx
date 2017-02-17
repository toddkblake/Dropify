import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Splash from './splash/splash';
import WebPlayer from './web-player';
import Browse from './browse/browse_container';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) replace("/browse");
  };

  const _redirectUnlessLoggedIn = (nextState, replace) => {
    if (!store.getState().session.currentUser) replace("/");
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Splash } onEnter={ _redirectIfLoggedIn } />
          <Route component={ WebPlayer } onEnter={ _redirectUnlessLoggedIn }>
            <Route path="/browse" component={ Browse } onEnter={ _redirectUnlessLoggedIn } />
            <Route path="/browse" component={ Browse } onEnter={ _redirectUnlessLoggedIn } />
            <Route path="/browse" component={ Browse } onEnter={ _redirectUnlessLoggedIn } />

          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
