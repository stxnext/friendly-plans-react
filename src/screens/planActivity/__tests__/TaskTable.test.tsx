import { shallow } from 'enzyme';
import { PlanItem } from 'models';
import React from 'react';

import { TaskTable } from '../TaskTable';

const props = {
  planItemList: [new PlanItem()],
  handlePlanListOrderChanged: jest.fn(),
};

describe('TaskTable', () => {
  it('renders correctly', () => {
    const taskTable = shallow(<TaskTable {...props} />);

    expect(taskTable).toMatchSnapshot();
  });
});
