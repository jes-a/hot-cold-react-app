import React from 'react';

import './guess-form.css'



export default function GuessForm(props) {
	return (
		<div className="guess-form-section">
			<form>
				<input type="number" className="guess-field" placeholder="Enter Your Guess" min={1} max={100} 
					onChange={e => props.onChange(e.target.value)} value={props.value} 
					/>
				<input className="button" type="submit" value="Guess" />
			</form>
		</div>
	);
}