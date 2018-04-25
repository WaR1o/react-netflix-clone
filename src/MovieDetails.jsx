import React from "react";
import moment from "moment";
import { DetailedMovie, Year } from "./styles";
import { MOVIES_LIST } from "./mock-data";

const movie = MOVIES_LIST.data[2];

const MovieDetails = () => (
  <DetailedMovie>
    <img src={movie.poster_path} alt="movie poster" />
    <div>
      <h2>{movie.title}</h2>
      <span>{movie.vote_average}</span>
      <br />
      <Year>{moment(movie.release_date).format("YYYY")}</Year>
      <span>{movie.runtime} min</span>
      <p>{movie.overview}</p>
    </div>
  </DetailedMovie>
);

export default MovieDetails;
