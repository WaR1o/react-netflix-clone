import { MOVIES_LIST } from "../mock-data";

const initialState = {
  movies: MOVIES_LIST.data,
  searchTerm: "",
  searchBy: "",
  sortBy: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SORT_BY_RATING":
      return {
        ...state,
        movies: state.movies
          .slice()
          .sort((a, b) => b.vote_average - a.vote_average)
      };
    case "SORT_BY_YEAR":
      return {
        ...state,
        movies: state.movies
          .slice()
          .sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
      };
    default:
      return state;
  }
};
