/* eslint-env node, jest */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { UnwrappedMovieDetails } from '../MovieDetails.jsx';
import { SINGLE_MOVIE } from '../../../mock-data';

configure({ adapter: new Adapter() });

test('MovieDetails renders correctly ', () => {
  const movie = SINGLE_MOVIE;
  const component = shallow(<UnwrappedMovieDetails movie={movie} />);
  expect(component).toMatchSnapshot();
});
