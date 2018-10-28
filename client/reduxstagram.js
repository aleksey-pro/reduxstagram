// let's go!
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import css from './styles/style.styl';

//https://sentry.io/welcome/
// Использование issues с выводом ошибок и их удаленного отслеживания

// import Raven from 'raven-js';
// import { sentry_url, logExeption } from './data/config';
// Raven.config(sentry_url, {
//   tags: {
//     git_commit: 'uyyufjfjh',
//     userLevel: 'editor',
//   },
// }).install();
// logExeption(new Error('download failed!'), {
//   email: 'wesbos@gmail.com',
// });
// console.log(store.doesNot.noope());
// console.log(window.user.doesNotExist);

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
