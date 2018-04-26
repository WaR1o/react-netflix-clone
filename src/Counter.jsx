import React from 'react';
import { connect } from 'react-redux';

const Counter = props => (
  <React.Fragment>{props.movies.length ? <span>{props.movies.length} movies found</span> : ''}</React.Fragment>
);

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(Counter);
