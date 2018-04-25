import React from "react";
import Search from "./Search";
import Counter from "./Counter";
import SortBy from "./SortBy";
import { AppTitle, InfoWrapper, SearchBar, SearchWrapper } from "./styles";

const Header = () => (
  <React.Fragment>
    <SearchBar>
      <SearchWrapper>
        <AppTitle>netflixroulette</AppTitle>
        <Search />
      </SearchWrapper>
    </SearchBar>
    <InfoWrapper>
      <Counter />
      <SortBy />
    </InfoWrapper>
  </React.Fragment>
);

export default Header;
