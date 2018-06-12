// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import type { MoviesList } from '../../../flow-types';

const Counter = (props: MoviesList) => (
  <React.Fragment>{props.movies.length ? <span>{props.movies.length} movies found</span> : ''}</React.Fragment>
);

const mapStateToProps = (state: MoviesList) => ({
  movies: state.movies,
});

const ConnectedCounter = connect(mapStateToProps)(Counter);
export const UnwrappedCounter = Counter;
export { ConnectedCounter as Counter };
