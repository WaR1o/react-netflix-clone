import React from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";
import { MOVIES_LIST } from "./mock-data";

const movies = MOVIES_LIST.data;

const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  grid-gap: 2em;
`;

const MoviesList = () => (
  <MoviesGrid>
    {movies.map(movie => <MovieCard key={movie.id} {...movie} />)}
  </MoviesGrid>
);

export default MoviesList;
