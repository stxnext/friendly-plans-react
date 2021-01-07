import { shallow } from 'enzyme';
import { navigationMock } from 'helpers';
import React from 'react';

import { PlanActivityScreen } from '../PlanActivityScreen';

jest.mock('models/ModelSubscriber', () => ({
  ModelSubscriber: jest.fn().mockImplementation(() => ({
    subscribeCollectionUpdates: jest.fn(),
    unsubscribeCollectionUpdates: jest.fn(),
  })),
}));

describe('PlanActivityScreen', () => {
  const props = {
    navigation: navigationMock,
  };

  it('renders correctly', () => {
    const planActivityScreen = shallow(<PlanActivityScreen {...props} />);

    expect(planActivityScreen).toMatchSnapshot();
  });
});
