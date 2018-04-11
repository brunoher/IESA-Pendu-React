import React from 'react';
import './HangMan.css';

import _1 from './assets/1.png'
import _2 from './assets/2.png'
import _3 from './assets/3.png'
import _4 from './assets/4.png'
import _5 from './assets/5.png'
import _6 from './assets/6.png'
import _7 from './assets/7.png'
import _8 from './assets/8.png'
import _9 from './assets/9.png'
import _10 from './assets/10.png'
import _11 from './assets/11.png'



const hangParts = [null, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11]

export function HangMan ({triesLeft}) {

	return (
		<div className="hangman-container">
			{ triesLeft < 11 && triesLeft > 0 && 
				<img className="not-hung-yet" src={hangParts[11-triesLeft]} alt="Le pendu"/> 
			}

			{ triesLeft === 0 && 
				<div>
					<img className="not-hung-yet" src={hangParts[4]} alt="Le pendu"/>
					<img className="hung" src={hangParts[11]} alt="Le pendu"/>
				</div>
			}
		</div>	
	)
}