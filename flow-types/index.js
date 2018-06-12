export type Movie = {
  id: Number,
  title: String,
  tagline: String,
  vote_average: Number,
  vote_count: Number,
  release_date: String,
  poster_path: String,
  overview: String,
  budget: Number,
  revenue: Number,
  genres: Array<String>,
  runtime: Number,
};

export type MoviesList = {
  movies: Array<Movie>,
};

export type State = {
  movies: Array<Movie>,
  movie: Movie,
  searchTerm: String,
  searchBy: String,
  sortBy: String,
  moviesLoaded: Boolean,
};
