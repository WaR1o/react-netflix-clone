import React from "react";
import { Link } from "react-router-dom";
import { AppTitle } from "./styles";
import MovieDetails from "./MovieDetails";

const Header = props => (
  <React.Fragment>
    <Link to="/">
      <AppTitle>netflixroulette</AppTitle>
    </Link>
  </React.Fragment>
);

export default Header;
