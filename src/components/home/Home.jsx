import React from 'react';
import { Header, Footer, MovieDetails, MoviesList, Search } from '../components';
import { Redirect, Route, Switch } from 'react-router-dom';


export const Home = () => (
  <React.Fragment>
    <Header />
    <Switch>
      <Route path="/home/film/:id" component={MovieDetails} />
      <Route path="/home" component={Search} />
    </Switch>
    <MoviesList />
    <Footer />
  </React.Fragment>
)