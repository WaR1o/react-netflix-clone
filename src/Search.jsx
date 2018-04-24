import React from "react";

const Search = () => (
  <div>
    <h2>Find your movie</h2>
    <input placeholder="Search for movie" type="text" />
    <span>search by</span>
    <input type="button" value="title" /> <input type="button" value="genre" />
    <input type="button" value="search" />
  </div>
);

export default Search;
