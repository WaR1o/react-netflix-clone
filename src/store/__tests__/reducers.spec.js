/* eslint-env node, jest */
import reducers from '../reducers';
import { GET_MOVIE } from '../actions';
import { SINGLE_MOVIE } from '../../mock-data';

describe('Reducer should ', () => {
  test('return correct state with correct movie after GET_MOVIE action dispatches', () => {
    const movieData = SINGLE_MOVIE;
    const action = { type: GET_MOVIE, data: movieData };
    const state = reducers({}, action);
    expect(state).toEqual({ movie: movieData });
  });
});
