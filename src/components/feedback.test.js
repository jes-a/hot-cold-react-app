import React from 'react';
import {shallow, mount} from 'enzyme';

import Feedback from '../components/feedback.js';

describe('<Feedback />', () => {
  it('Renders without crashing', () => {
    shallow(<Feedback />);
  });

  it('Renders some feedback', () => {
    let test_feedback = "This is a test";

    let wrapper = shallow(<Feedback feedback={test_feedback} />);
    expect(wrapper.contains(test_feedback)).toEqual(true);
  });

}); 