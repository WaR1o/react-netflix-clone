import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import ErrorBoundary from "./ErrorBoundary";
import Header from "./Header";
import MoviesList from "./MoviesList";
import Footer from "./Footer";

const Wrapper = styled.div`
  width: 80%;
  margin: 0 10%;
`;

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
