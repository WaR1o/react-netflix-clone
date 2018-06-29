// @flow
/* eslint-disable no-shadow */
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MovieCard } from '../components';
import { getMovies } from '../../store/actions';
import { MoviesGrid } from './MoviesListStyles';
import type { Movie, State } from '../../../flow-types';

class MoviesList extends React.Component<Movie> {
  componentDidMount() {
    const { getMovies, movies } = this.props;
    if (!movies) {
      getMovies();
    }
  }

  render() {
    const { movies } = this.props;
    if (!movies) return <h1>No Films Found</h1>;
    return <MoviesGrid>{movies.map(movie => <MovieCard key={movie.id} {...movie} />)}</MoviesGrid>;
  }
}

const mapStateToProps = (state: State) => ({
  movies: state.movies,
  isLoaded: state.moviesLoaded,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMovies,
    },
    dispatch,
  );

const ConnectedMoviesList = connect(mapStateToProps, mapDispatchToProps)(MoviesList);
export { ConnectedMoviesList as MoviesList };
