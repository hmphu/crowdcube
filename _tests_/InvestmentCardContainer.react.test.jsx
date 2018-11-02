// Link.react.test.js
import React from 'react';
import renderer from 'react-test-renderer';

import mockAxios from 'axios';
import getData from '../src/utils/getData';

import InvestmentCardContainer from '../src/containers/InvestmentCardContainer';

test('Investment card container loads', () => {
  const component = renderer.create(<InvestmentCardContainer />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Data is fetched from the API', async () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve({}));

  const results = await getData();

  expect(results).toEqual({});
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith('https://gist.githubusercontent.com/cedmax/a5699ed75aab57c2be1bf7a6028f4f06/raw/08f0c6bc16a013307f1b4856eecccfc4bd85f8d3/crowdcube-test-data.json');
});
