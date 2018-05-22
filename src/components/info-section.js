import React from 'react';

import './info-section.css'

export default function InfoSection(props) {
	return(
		<div id="modal" className="info-section">
			<div className="content">
				<h3>What Do I Do?</h3>
				<div>
					<p>This is a Hot or Cold Number Guessing Game. Here are the rules: </p>
					<ul className="info-ul">
						<li>1. I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
						<li>2. You need to <strong>guess</strong> until you can find the hidden secret number.</li>
						<li>3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
					</ul>
					<p>So, are you ready?</p>
					<a className="close" href="#">Got It!</a>
				</div>
			</div>
		</div>
	);
}