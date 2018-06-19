import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import App from './components/App.jsx';
import { configureStore } from '../src/store/store';
import { initialState } from '../src/store/reducers';
import { MOVIES_LIST } from './mock-data';

function renderHTML(body, preloadedState, styles) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>TV Shows Scout</title>
          ${styles}
        </head>
        <body>
          <div id="app">${body}</div>
          <script>
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const state = { ...initialState, movies: MOVIES_LIST.data };
    const store = configureStore(state);
    const context = {};
    const sheet = new ServerStyleSheet();

    sheet.collectStyles(<App store={store} />);

    const root = <App store={store} context={context} location={req.url} Router={StaticRouter} />;

    const styles = sheet.getStyleTags();
    const htmlString = renderToString(root);
    const preloadedState = store.getState();

    res.send(renderHTML(htmlString, preloadedState, styles));
  };
}
