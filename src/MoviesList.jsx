import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";
import { getMovies } from "./store/actions";
import { MoviesGrid } from "./styles";

class MoviesList extends React.Component {
  componentDidMount() {
    const { getMovies, isLoaded } = this.props;
    if (!isLoaded) {
      getMovies();
    }
  }

  render() {
    const { movies, isLoaded } = this.props;
    if (!isLoaded) return <h1>No Films Found</h1>;
    return (
      <MoviesGrid>
        {movies.map(movie => <MovieCard key={movie.id} {...movie} />)}
      </MoviesGrid>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  isLoaded: state.moviesLoaded
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMovies
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
