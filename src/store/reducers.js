import {
  GET_MOVIES,
  GET_MOVIE,
  SORT_BY_YEAR,
  SORT_BY_RATING,
  RESET_MOVIE
} from "./actions";

const initialState = {
  movies: [],
  movie: {},
  searchTerm: "",
  searchBy: "",
  sortBy: "",
  moviesLoaded: false
};

export default (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: data,
        moviesLoaded: true
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: data
      };
    case SORT_BY_RATING:
      return {
        ...state,
        movies: state.movies
          .slice()
          .sort((a, b) => b.vote_average - a.vote_average)
      };
    case SORT_BY_YEAR:
      return {
        ...state,
        movies: state.movies
          .slice()
          .sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
      };
    case RESET_MOVIE:
      return {
        ...state,
        movie: {}
      };
    default:
      return state;
  }
};
