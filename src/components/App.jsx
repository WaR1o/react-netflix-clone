// @flow
import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import type { Route as RouteType } from 'react-router-dom';
import type { State } from '../../flow-types';
import { ErrorBoundary, Home, PageNotFound } from './components';
import { Wrapper } from '../styles/common';

type AppProps = {
  Router: RouteType,
  store: State,
  location: String,
  context: any,
};

const App = ({
  Router, store, location, context,
}: AppProps) => (
  <Provider store={store}>
    <ErrorBoundary>
      <Wrapper>
        <Router location={location} context={context}>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/page-not-found" component={PageNotFound} />
            <Redirect exact from="/" to="/home" />
            <Redirect from="*" to="/page-not-found" />
          </Switch>
        </Router>
      </Wrapper>
    </ErrorBoundary>
  </Provider>
);

export default App;
