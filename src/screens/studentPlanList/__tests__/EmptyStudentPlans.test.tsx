import { shallow } from 'enzyme';
import { navigationMock } from 'helpers';
import React from 'react';

import { EmptyStudentPlans } from '../EmptyStudentPlans';

describe('EmptyStydentPlans', () => {
  const props = {
    navigation: navigationMock,
  };

  it('renders correctly', () => {
    const emptyStudentPlans = shallow(<EmptyStudentPlans {...props} />);

    expect(emptyStudentPlans).toMatchSnapshot();
  });
});
