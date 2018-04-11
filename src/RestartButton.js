import React from 'react';
import './RestartButton.css';

export function RestartButton ({handleClick}) {

	return (
		<button className="restartButton" onClick={handleClick}>Recommencer</button>
	)
}