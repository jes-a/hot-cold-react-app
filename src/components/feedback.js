import React from 'react';

import './feedback.css';

function DefaultMessage() {
	return (
		<div>
			<h2>Make Your Guess!</h2>
		</div>
	);	
}

// function HotMessage() {
// 	return (
// 		<div>
// 			<h2>Hot</h2>
// 		</div>
// 	);
// }

// function ColdMessage() {
// 	return (
// 		<div>
// 			<h2>Cold</h2>
// 		</div>
// 	);
// }


export default function Feedback(props) {

	// const key = props.guessCount;
		return (		
			<DefaultMessage />);

}