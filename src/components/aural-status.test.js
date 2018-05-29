import React from 'react';
import {shallow, mount} from 'enzyme';

import AuralStatus from '../components/aural-status.js';

describe('<AuralStatus />', () => {
  it('Renders without crashing', () => {
    shallow(<AuralStatus />);
  });

  it('Renders an aural status update', () => {
    const aural_test = "This is a test" 
    const wrapper = shallow(<AuralStatus auralStatus={aural_test}/>);
    expect(wrapper.contains(aural_test)).toEqual(true);
  });

});