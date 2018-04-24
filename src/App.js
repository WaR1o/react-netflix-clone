import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./ErrorBoundary";
import Header from "./Header";
import MoviesList from "./MoviesList";
import Footer from "./Footer";

const App = () => {
  return (
    <ErrorBoundary>
      <Header />
      <MoviesList />
      <Footer />
    </ErrorBoundary>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
