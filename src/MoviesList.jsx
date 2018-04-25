import React from "react";
import MovieCard from "./MovieCard";
import { MOVIES_LIST } from "./mock-data";
import { MoviesGrid } from "./styles";

const movies = MOVIES_LIST.data;

const MoviesList = () => (
  <MoviesGrid>
    {movies.map(movie => <MovieCard key={movie.id} {...movie} />)}
  </MoviesGrid>
);

export default MoviesList;
