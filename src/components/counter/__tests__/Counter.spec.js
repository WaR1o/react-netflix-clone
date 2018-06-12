/* eslint-env node, jest */
import React from 'react';
import renderer from 'react-test-renderer';
import { UnwrappedCounter } from '../Counter.jsx';

test('Counter renders correctly', () => {
  const movies = [1, 2, 3];
  const component = renderer.create(<UnwrappedCounter movies={movies} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
