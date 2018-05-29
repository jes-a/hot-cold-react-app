import React from 'react';
import {shallow, mount} from 'enzyme';

import StatusSection from '../components/status-section.js';

describe('<StatusSection />', () => {
	it('Renders without crashing', () => {
		shallow(<StatusSection auralStatus="" guesses={[]} />);
	});

});