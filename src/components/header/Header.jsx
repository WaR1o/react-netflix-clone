import React from 'react';
import { AppTitle } from './HeaderStyles';
import { MovieDetails } from '../components';
import { StyledLink } from '../../styles/common';

export const Header = props => (
  <React.Fragment>
    <StyledLink to="/">
      <AppTitle>netflixroulette</AppTitle>
    </StyledLink>
  </React.Fragment>
);
