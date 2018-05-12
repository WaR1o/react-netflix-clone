import React from 'react';
import { connect } from 'react-redux';
import { Counter, SortBy } from '../components';
import { Text, Button, HeaderWrapper } from '../../styles/common';
import { SearchInput, InfoWrapper } from './SearchStyles';

const Search = props => (
  <React.Fragment>
    <HeaderWrapper>
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
    </HeaderWrapper>
    <InfoWrapper>
      {props.movies.length ? <Counter /> : ''}
      {props.movies.length ? <SortBy /> : ''}
    </InfoWrapper>
  </React.Fragment>
);

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

const ConnectedSearch = connect(mapStateToProps)(Search);
export { ConnectedSearch as Search };
