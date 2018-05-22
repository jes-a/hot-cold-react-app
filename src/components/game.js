import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
// import InfoSection from './info-section';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<main>
				<Header />
				<GuessSection />
				<StatusSection />
			</main>

		)
	}


}