import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';

const middlewares = [thunk, logger, reduxImmutableStateInvariant()];

export function configureStore(initialState) {
  return createStore(
    reducer,
    initialState,
    compose(applyMiddleware(...middlewares)),
  );
}

export const store = configureStore();
