// @flow
import * as React from 'react';
import { AppTitle } from './HeaderStyles';
import { StyledLink } from '../../styles/common';

export const Header = (): React.Element<any> => (
  <React.Fragment>
    <StyledLink to="/">
      <AppTitle>netflixroulette</AppTitle>
    </StyledLink>
  </React.Fragment>
);
