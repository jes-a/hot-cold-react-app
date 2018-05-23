import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    if (this.props.onMakeGuess) {
      const value = this.input.value;
      this.props.onMakeGuess(value);
    }
    this.input.value = '';
    this.input.focus();
}

	render() {
		return (
			<div className="guess-form-section">
				<form onSubmit={e => this.onSubmit(e)}>
					<input 
						type="number" 
						name="userGuess"
						id="userGuess"
						className="guess-field" 
						placeholder="Enter Your Guess" 
						min={1} 
						max={100} 
          	autoComplete="off"
						aria-labelledby="feedback"
						ref={input => (this.input = input)}
						required
					/>
					<input 
						className="button" 
						type="submit" 
						name="submit"
						value="Guess"
						id="guessButton"
	 				/>
				</form>
			</div>
		);
	}
}

