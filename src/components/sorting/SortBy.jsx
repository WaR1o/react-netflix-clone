// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { sortByRating, sortByYear } from '../../store/actions';
import { ActionLink } from '../../styles/common';
import { grey } from '../../styles/constants';
import type { State } from '../../../flow-types';

type SortProps = {
  sortByRating: () => Boolean,
  sortByYear: () => Boolean,
};

const SortBy = (props: SortProps): React.Element<any> => (
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

const mapStateToProps = (state: State) => ({
  movies: state.movies,
});

const mapDispatchToProps = dispatch => ({
  sortByRating: () => {
    dispatch(sortByRating());
  },
  sortByYear: () => {
    dispatch(sortByYear());
  },
});

const ConnectedSort = connect(mapStateToProps, mapDispatchToProps)(SortBy);
export { ConnectedSort as SortBy };
