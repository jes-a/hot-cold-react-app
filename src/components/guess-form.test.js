import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from '../components/guess-form.js';

describe('<GuessForm />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessForm />);
	});



});