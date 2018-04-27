import "babel-polyfill";

export const GET_MOVIE = "GET_MOVIE";
export const GET_MOVIES = "GET_MOVIES";
export const SORT_BY_RATING = "SORT_BY_RATING";
export const SORT_BY_YEAR = "SORT_BY_YEAR";
export const RESET_MOVIE = "RESET_MOVIE";

export const sortByRating = () => {
  return {
    type: "SORT_BY_RATING"
  };
};

export const sortByYear = () => {
  return {
    type: "SORT_BY_YEAR"
  };
};

export function getMovies() {
  return async function(dispatch) {
    const res = await fetch("http://react-cdp-api.herokuapp.com/movies");
    const movies = await res.json();
    return dispatch({
      type: "GET_MOVIES",
      data: movies.data
    });
  };
}

export function getMovie(id) {
  return async function(dispatch) {
    const res = await fetch(`http://react-cdp-api.herokuapp.com/movies/${id}`);
    const movie = await res.json();
    console.log("movie", movie);
    return dispatch({
      type: "GET_MOVIE",
      data: movie
    });
  };
}

export function resetMovie() {
  return {
    type: "RESET_MOVIE"
  };
}
