// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Card, CardInfo, CardTitle, Genres } from './MovieCardStyles';
import { Poster, StyledLink, Year } from '../../styles/common';
import type { Movie, State } from '../../../flow-types';

const MovieCard = (props: Movie): React.Element<any> => (
  <Card>
    <StyledLink to={`/home/film/${props.id}`}>
      <Poster alt={props.title} src={props.poster_path} />
    </StyledLink>
    <br />
    <CardInfo>
      <CardTitle>{props.title}</CardTitle>
      <Year>{moment(props.release_date).format('YYYY')}</Year>
      <br />
      <Genres>
        {props.genres.map((genre, i) => (
          <span key={i}>
            {i > 0 ? ' & ' : ''}
            {genre}
          </span>
        ))}
      </Genres>
    </CardInfo>
  </Card>
);

const mapStateToProps = (state: State) => ({
  movies: state.movies,
  movie: state.movie,
});

const ConnectedMovieCard = connect(mapStateToProps)(MovieCard);
export { ConnectedMovieCard as MovieCard };
