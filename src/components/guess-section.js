import React from 'react';

import GuessForm from './guess-form';
import Feedback from './feedback';


export default function GuessSection(props) {
	return (
		<div className="guess-section">
			<Feedback />
			<GuessForm />
		</div>
	);
}