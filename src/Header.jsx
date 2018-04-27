import React from "react";
import { connect } from "react-redux";
import { AppTitle, InfoWrapper, SearchBar, SearchWrapper } from "./styles";
import Search from "./Search";
import Counter from "./Counter";
import SortBy from "./SortBy";

const Header = props => (
  <React.Fragment>
    <SearchBar>
      <SearchWrapper>
        <AppTitle>netflixroulette</AppTitle>
        <Search />
      </SearchWrapper>
    </SearchBar>
    <InfoWrapper>
      {props.movies.length ? <Counter /> : ""}
      {props.movies.length ? <SortBy /> : ""}
    </InfoWrapper>
  </React.Fragment>
);

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

export default connect(mapStateToProps)(Header);
