import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';
import MoviesList from './MoviesList';
import MovieDetails from './MovieDetails';
import Footer from './Footer';
import { Wrapper } from './styles';

const App = () => (
  <ErrorBoundary>
    <Wrapper>
      <Header />
      <MoviesList />
      <MovieDetails />
      <Footer />
    </Wrapper>
  </ErrorBoundary>
);

export default App;
