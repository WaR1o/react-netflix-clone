import React from 'react';
import { withRouter } from 'react-router';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ErrorBoundary, Home, PageNotFound } from './components';
import { Wrapper } from '../styles/common';

const App = withRouter(({ history, children }) => (
  <ErrorBoundary>
    <Wrapper>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/page-not-found" component={PageNotFound} />
        <Redirect exact from="/" to="/home" />
        <Redirect from="*" to="/page-not-found" />
      </Switch>
    </Wrapper >
  </ErrorBoundary >
));

export default App;
