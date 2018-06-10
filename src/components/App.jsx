import React from 'react';
// import { withRouter } from 'react-router';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ErrorBoundary, Home, PageNotFound } from './components';
import { Wrapper } from '../styles/common';

const App = ({ Router, store, location, context, history, children }) => (
  <Provider store={store} >
    <ErrorBoundary>
      <Wrapper>
        <Router location={location} context={context} >
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/page-not-found" component={PageNotFound} />
            <Redirect exact from="/" to="/home" />
            <Redirect from="*" to="/page-not-found" />
          </Switch>
        </Router>
      </Wrapper >
    </ErrorBoundary >
  </Provider>
);

export default App;
