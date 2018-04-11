import React, {Component} from 'react';
import './Letters.css';
import {Letter} from './Letter.js';
import {TryInput} from './TryInput.js';
import {HangMan} from './HangMan.js';
import {RestartButton} from './RestartButton.js';
import {PlayedLetters} from './PlayedLetters.js';

export class Letters extends Component {
	constructor(props) {
		super(props)
		this.state = {
			letters: props.word.split("").map(letter => letter = [letter, false,]),
			triesLeft: 11,
			playedLetters: [],
		}
		this.handleTryClick = this.handleTryClick.bind(this)
		this.handleRestartClick = this.handleRestartClick.bind(this)
	}

		
	handleRestartClick () {
		this.setState({
			letters: this.props.word.split("").map(letter => letter = [letter, false,]),
			triesLeft: 11,
		})
	}

	handleTryClick(letterTyped) {
		
		if (this.state.triesLeft > 0 && /[a-zA-Z]/.test(letterTyped)) {
			
			var playedLetters = this.state.playedLetters
			var alreadyPlayed = false
		
			playedLetters.map(function(letter, index) {
				console.log("coucou")
				if (letter.value === letterTyped) {
					alreadyPlayed = true
				} /*else if (index === this.length-1) {

				}*/
				return true
			})

			if (!alreadyPlayed) {

				var letters = this.state.letters
				var triesLeft = this.state.triesLeft
				var won = false
				
				letters.map(function(letter) {
					if (letter[0].toLowerCase() === letterTyped.toLowerCase()) { 
						letter[1]= true	
						won = true
					}
					return letter
				})
				playedLetters.push({value : letterTyped, good : won,})	

				won ? this.setState({letters: letters, playedLetters: playedLetters}) : this.setState({triesLeft: triesLeft-1, playedLetters: playedLetters,})
			}		
		}
	}

	render() {
		const letters = this.state.letters
		const triesLeft = this.state.triesLeft
		const playedLetters = this.state.playedLetters
		
		return (
			<div className="main-container">
				<PlayedLetters playedLetters={playedLetters}/>
				<HangMan triesLeft={triesLeft}/>
				<div className="letters-container"> 
					{letters.map(
						(letter, index) => (
							<Letter letter={letter} key={index}/>
						))
					}
				</div>
				<TryInput handleClick={this.handleTryClick}/>
				<RestartButton handleClick={this.handleRestartClick}/>
			</div>
		)
	}
}