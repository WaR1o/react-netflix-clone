import React from "react";
import { Text, Button, SearchInput } from "./styles";

const Search = () => (
  <div>
    <Text big>
      <p>Find your movie</p>
    </Text>
    <SearchInput placeholder="Search..." type="text" />
    <Text>search by</Text>
    <Button>
      <Text>Title</Text>
    </Button>
    <Button>
      <Text>Genre</Text>
    </Button>
    <Button active big floatR>
      <Text>Search</Text>
    </Button>
  </div>
);

export default Search;
