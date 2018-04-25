import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./ErrorBoundary";
import Header from "./Header";
import MoviesList from "./MoviesList";
import MovieDetails from "./MovieDetails";
import Footer from "./Footer";
import { Wrapper } from "./styles";
import { MOVIES_LIST } from "./mock-data";

class App extends React.Component {
  state = {
    movies: [],
    searchBy: "",
    sortBy: "",
    searchTerm: ""
  };

  componentDidMount() {
    this.setState({ movies: MOVIES_LIST.data });
  }

  render() {
    return (
      <ErrorBoundary>
        <Wrapper>
          <Header moviesAmount={this.state.movies.length} />
          <MoviesList />
          <MovieDetails />
          <Footer />
        </Wrapper>
      </ErrorBoundary>
    );
  }
}

export default App;
