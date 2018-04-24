import React from "react";

const Search = () => (
  <div>
    <h2>Find your movie</h2>
    <div className="ui input">
      <input placeholder="Search..." type="text" />
    </div>
    <span>search by</span>
    <button className="ui button">Title</button>
    <button className="ui button">Genre</button>
    <button className="ui button">Search</button>
  </div>
);

export default Search;
