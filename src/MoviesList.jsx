import React from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";
import { MOVIES_LIST } from "./mock-data";
import { MoviesGrid } from "./styles";

const movies = MOVIES_LIST.data;

const MoviesList = props => (
  <MoviesGrid>
    {props.movies.map(movie => <MovieCard key={movie.id} {...movie} />)}
  </MoviesGrid>
);

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(MoviesList);
