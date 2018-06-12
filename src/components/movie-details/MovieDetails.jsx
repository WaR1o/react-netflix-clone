// @flow
/* eslint-disable no-shadow */
import React from 'react';
import moment from 'moment';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Poster, HeaderWrapper } from '../../styles/common';
import { DetailedMovie, Duration, MovieTitle, MovieWrapper, Rating, Subheader } from './MovieDetailsStyles';
import { getMovie, resetMovie } from '../../store/actions';
import type { Movie, State } from '../../../flow-types';

class MovieDetails extends React.Component<Movie> {
  componentDidMount() {
    const { getMovie, match } = this.props;
    if (getMovie && match) {
      getMovie(match.params.id);
    }
  }

  /* eslint-disable */
  UNSAFE_componentWillReceiveProps(nextProps: any) {
    if (!this.props.location || !nextProps.location) {
      return;
    }
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.props.getMovie(nextProps.match.params.id);
    }
  }

  componentWillUnmount() {
    const { resetMovie } = this.props;
    resetMovie();
  }
  /* eslint-enable */

  render() {
    const { movie } = this.props;
    return (
      <HeaderWrapper>
        <DetailedMovie>
          <Poster src={movie.poster_path} alt="movie poster" />
          <MovieWrapper>
            <MovieTitle>{movie.title}</MovieTitle>
            {movie.vote_average > 0 && <Rating>{movie.vote_average.toFixed(1)}</Rating>}
            <Subheader>
              <span>{moment(movie.release_date).format('YYYY')}</span>
              <Duration>{movie.runtime} min</Duration>
            </Subheader>
            <p>{movie.overview}</p>
          </MovieWrapper>
        </DetailedMovie>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state: State) => ({
  movies: state.movies,
  movie: state.movie,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMovie,
      resetMovie,
    },
    dispatch,
  );

const ConnectedMovieDetails = connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
export const UnwrappedMovieDetails = MovieDetails;
export { ConnectedMovieDetails as MovieDetails };
