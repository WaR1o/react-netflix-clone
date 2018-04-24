import React from "react";
import MovieCard from "./MovieCard";
import { MOVIES_LIST } from "./mock-data";

const movies = MOVIES_LIST.data;

const MoviesList = () => (
  <div>{movies.map(movie => <MovieCard key={movie.id} {...movie} />)}</div>
);

export default MoviesList;
