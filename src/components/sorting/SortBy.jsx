import React from 'react';
import { connect } from 'react-redux';
import { sortByRating, sortByYear } from '../../store/actions';

const SortBy = props => (
  <div>
    <span>Sort by </span>
    <span onClick={props.sortByYear}>year </span>
    <span onClick={props.sortByRating}>rating</span>
  </div>
);

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sortByRating: () => {
      dispatch(sortByRating());
    },
    sortByYear: () => {
      dispatch(sortByYear());
    }
  };
};

const ConnectedSort = connect(mapStateToProps, mapDispatchToProps)(SortBy);
export { ConnectedSort as SortBy };
