import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './components/App';
import { PageNotFound } from './components/components';
import { configureStore } from './store/store';
import { getInitialNotes } from './store/actions';

const store = configureStore(window.PRELOADED_STATE);

ReactDOM.hydrate(<App Router={BrowserRouter} store={store} />,
  document.getElementById('app')
);
