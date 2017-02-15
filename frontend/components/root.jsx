import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Splash from './splash/splash';
import Browse from './browse/browse';

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
          <Route path="/browse" component={ Browse } onEnter={ _redirectUnlessLoggedIn } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
