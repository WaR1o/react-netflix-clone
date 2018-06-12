// @flow
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header, Footer, MovieDetails, MoviesList, Search } from '../components';

export const Home = (): React.Element<any> => (
  <React.Fragment>
    <Header />
    <Switch>
      <Route path="/home/film/:id" component={MovieDetails} />
      <Route path="/home" component={Search} />
    </Switch>
    <MoviesList />
    <Footer />
  </React.Fragment>
);
