import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ErrorBoundary, Header, Footer, MovieDetails, MoviesList, Search } from './components';
import { Wrapper } from '../styles/common';

const App = () => (
  <ErrorBoundary>
    <Wrapper>
      <Header />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route path="/:id" component={MovieDetails} />
      </Switch>
      <MoviesList />
      <Footer />
    </Wrapper>
  </ErrorBoundary>
);

export default App;
