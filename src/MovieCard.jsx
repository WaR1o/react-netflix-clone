import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import moment from "moment";
import { Card, CardInfo, CardTitle, Poster, Year, Genres } from "./styles";
import { getMovie } from "./store/actions";

class MovieCard extends React.Component {
  handleCardClick = () => {
    const { getMovie, id } = this.props;
    getMovie(id);
  };
  render() {
    const { title, poster_path, release_date, genres } = this.props;
    return (
      <Card onClick={this.handleCardClick}>
        <Poster alt={title} src={poster_path} />
        <br />
        <CardInfo>
          <CardTitle>{title}</CardTitle>
          <Year>{moment(release_date).format("YYYY")}</Year>
          <br />
          <Genres>
            {genres.map((genre, i) => (
              <span key={i}>
                {i > 0 ? " & " : ""}
                {genre}
              </span>
            ))}
          </Genres>
        </CardInfo>
      </Card>
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
      getMovie
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
