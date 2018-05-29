import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from '../components/guess-count.js';

describe('<GuessCount />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessCount />);
	});

	it('Renders the correct number of guesses', () => {
		const value = 7;
		const wrapper = shallow(<GuessCount guessCount={value} />);
		expect(wrapper.text()).toEqual(`You've made ${value} guesses!`);
	});

});