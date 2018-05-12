import React from 'react';
import { Link } from 'react-router-dom';
import { AppTitle } from './HeaderStyles';
import { MovieDetails } from '../components';

export const Header = props => (
  <React.Fragment>
    <Link to="/">
      <AppTitle>netflixroulette</AppTitle>
    </Link>
  </React.Fragment>
);
