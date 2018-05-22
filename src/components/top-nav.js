import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
	return (
		<nav>
			<ul className="nav-list clearfix">
				<li><a href="#" id="InfoSection">What?</a></li>
				<li><a href="#" id="NewGame">+ New Game</a></li>
			</ul>
		</nav>
	);
}