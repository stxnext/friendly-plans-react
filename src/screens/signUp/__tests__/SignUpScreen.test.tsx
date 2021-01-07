import { shallow } from 'enzyme';
import { navigationMock } from 'helpers';
import React from 'react';

import { SignUpScreen } from '../SignUpScreen';

describe('SignUpScreen', () => {
  const props = {
    navigation: navigationMock,
  };

  it('should match snapshot', () => {
    const wrapper = shallow(<SignUpScreen {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
