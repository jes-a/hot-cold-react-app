import React from 'react';

import GuessCount from './guess-count';
import GuessList from './guess-list';
import AuralStatus from './aural-status';

export default function StatusSection (props) {
	return (
		<div>
			<GuessCount />
			<GuessList />
			<AuralStatus />
		</div>
	);
}