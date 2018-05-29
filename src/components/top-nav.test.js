import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from '../components/top-nav.js';

describe('<TopNav />', () => {
  it('Renders without crashing', () => {
    shallow(<TopNav />);
  });

});

