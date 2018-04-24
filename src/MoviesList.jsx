import React from "react";
import MovieCard from "./MovieCard";

const movies = [
  {
    id: "312tsdfs",
    title: "Django Unchained",
    genres: ["Action", "Western", "Drama"],
    year: 2012,
    poster:
      "https://www.amazon.com/Django-Unchained-27x40-Poster-Posters/dp/B00ATFFT7A"
  },
  {
    id: "534vcxsa",
    title: "Pulp fiction",
    genres: ["Action", "Drama"],
    year: 1994,
    poster: "https://www.movieart.com/pulp-fiction-1994-6115/"
  },
  {
    id: "21sadga",
    title: "kill bill vol.1",
    genres: ["Action", "Adventure"],
    year: 2004,
    poster: "http://www.moviepostershop.com/kill-bill-vol-2-movie-poster-2004"
  }
];

const MoviesList = () => (
  <div>{movies.map(movie => <MovieCard key={movie.id} {...movie} />)}</div>
);

export default MoviesList;
