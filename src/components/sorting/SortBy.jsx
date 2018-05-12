import React from 'react';
import { connect } from 'react-redux';
import { sortByRating, sortByYear } from '../../store/actions';
import { ActionLink } from '../../styles/common';
import { grey } from '../../styles/constants';

const SortBy = props => (
  <div>
    <span>Sort by </span>
    <ActionLink hoverColor={grey} onClick={props.sortByYear}>
      year{' '}
    </ActionLink>
    <ActionLink hoverColor={grey} onClick={props.sortByRating}>
      rating
    </ActionLink>
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
