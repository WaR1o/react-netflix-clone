import React from "react";
import moment from "moment";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Poster, DetailedMovie, Year, HeaderWrapper } from "./styles";
import { getMovie, resetMovie } from "./store/actions";

class MovieDetails extends React.Component {
  componentDidMount() {
    const { getMovie, match } = this.props;
    getMovie(match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.location || !nextProps.location) {
      return;
    }
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.props.getMovie(nextProps.match.params.id);
    }
  }

  componentWillUnmount() {
    const { resetMovie } = this.props;
    resetMovie();
  }

  render() {
    const { movie } = this.props;
    return (
      <HeaderWrapper>
        <DetailedMovie>
          <Poster src={movie.poster_path} alt="movie poster" />
          <div>
            <h2>{movie.title}</h2>
            <span>{movie.vote_average}</span>
            <br />
            <span>{moment(movie.release_date).format("YYYY")}</span>
            <br />
            <span>{movie.runtime} min</span>
            <p>{movie.overview}</p>
          </div>
        </DetailedMovie>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  movie: state.movie
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMovie,
      resetMovie
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
