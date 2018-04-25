import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./ErrorBoundary";
import Header from "./Header";
import MoviesList from "./MoviesList";
import Footer from "./Footer";
import { Wrapper } from "./styles";

const App = () => {
  return (
    <ErrorBoundary>
      <Wrapper>
        <Header />
        <MoviesList />
        <Footer />
      </Wrapper>
    </ErrorBoundary>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
