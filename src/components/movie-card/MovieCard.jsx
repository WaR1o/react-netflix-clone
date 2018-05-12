import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Card, CardInfo, CardTitle, Genres } from './MovieCardStyles';
import { Poster, Year } from '../../styles/common';

const MovieCard = props => (
  <Link to={`/${props.id}`}>
    <Card>
      <Poster alt={props.title} src={props.poster_path} />
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
  </Link>
);

const mapStateToProps = state => ({
  movies: state.movies,
  movie: state.movie
});

const ConnectedMovieCard = connect(mapStateToProps)(MovieCard);
export { ConnectedMovieCard as MovieCard };