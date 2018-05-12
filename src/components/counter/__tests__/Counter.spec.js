import React from 'react';
import renderer from 'react-test-renderer';
import { UnwrappedCounter } from '../Counter';

test('Counter renders correctly', () => {
  const movies = [1, 2, 3];
  const component = renderer.create(<UnwrappedCounter movies={movies} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
