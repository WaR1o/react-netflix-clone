import React from "react";
import { Route, Switch } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import Header from "./Header";
import MoviesList from "./MoviesList";
import MovieDetails from "./MovieDetails";
import Search from "./Search";
import Footer from "./Footer";
import { Wrapper } from "./styles";

const App = () => (
  <ErrorBoundary>
    <Wrapper>
      <Header />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route path="/:id" component={MovieDetails} />
      </Switch>
      <MoviesList />
      <Footer />
    </Wrapper>
  </ErrorBoundary>
);

export default App;
