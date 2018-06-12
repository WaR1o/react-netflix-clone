/* globals window, document */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';
import { configureStore } from './store/store';

const store = configureStore(window.PRELOADED_STATE);

ReactDOM.hydrate(<App Router={BrowserRouter} store={store} />, document.getElementById('app'));
