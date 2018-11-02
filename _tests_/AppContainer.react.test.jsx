// Link.react.test.js
import React from 'react';
import renderer from 'react-test-renderer';

import AppContainer from '../src/containers/AppContainer';

test('App container loads', () => {
  const component = renderer.create(<AppContainer />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
