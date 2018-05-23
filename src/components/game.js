import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: Math.round(Math.random() * 100) + 1
    };
  }

  restartGame() {
    this.setState({
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  }

  makeGuess(guess) {
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.setState({ feedback: 'Please enter a valid number' });
      return;
    }

    const difference = Math.abs(guess - this.state.correctAnswer);
    
		let feedback;
		if (difference >= 20) {
			feedback = 'Cold';
		} else if (difference >= 10) {
			feedback = 'Warm';
		} else if (difference >= 3) {
			feedback = 'Hot'
		} else {
			feedback = 'You guessed it!'
		}

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess]
    });

  	document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold';

	} 


	generateAuralUpdate() {
		const { guesses, feedback } = this.state;

		let auralStatus = `Guess count is at ${guesses.length}. The temperature of your last guess was ${feedback}`;
		
		if (guesses.length > 0) {
			auralStatus += `So far, you have guessed ${guesses.reverse().join(', ')}`;
		}

		this.setState({ auralStatus });
	}

	render() {
		const { feedback, guesses, auralStatus } = this.state;
		const guessCount = guesses.length;

    return (
      <div>
        <Header
          onRestartGame={() => this.restartGame()}
          onGenerateAuralUpdate={() => this.generateAuralUpdate()}
        />
        <main role="main">
          <GuessSection
            feedback={feedback}
            guessCount={guessCount}
            onMakeGuess={guess => this.makeGuess(guess)}
          />
          <StatusSection guesses={guesses} 
            auralStatus={auralStatus}
          />

          <InfoSection />
        </main>
      </div>
    );
	}


}