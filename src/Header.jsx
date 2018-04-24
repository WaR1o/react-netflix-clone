import React from "react";
import Search from "./Search";
import Counter from "./Counter";
import SortBy from "./SortBy";

const Header = () => (
  <div>
    <h1>TV Shows Scout</h1>
    <Search />
    <Counter />
    <SortBy />
  </div>
);

export default Header;
