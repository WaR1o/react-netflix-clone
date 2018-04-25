import React from "react";
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
      {props.moviesAmount ? <Counter number={props.moviesAmount} /> : ""}
      {props.moviesAmount ? <SortBy /> : ""}
    </InfoWrapper>
  </React.Fragment>
);

export default Header;
