import React from 'react';
import './TryInput.css';

export function TryInput (props) {
	var value = ""
	function setValue(e) {
		value = e.target.value
	}

	function submitValue () {
		if (typeof value === 'string' && value.length === 1) {
			props.handleClick(value)
		}
	}

	return (
		<div className="container">
			<legend>Choisissez une lettre</legend>
			<input onChange={setValue} className="try-input" type="text" maxLength="1"/> 
			<button onClick={submitValue} className="submit-btn">Valider</button>
		</div>
	)
}