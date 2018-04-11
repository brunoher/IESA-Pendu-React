import React from 'react';
import './PlayedLetters.css';

export function PlayedLetters({playedLetters}) {
    const s = playedLetters.length > 1 ? "s " : " "
    const alreadyPlayedTxtIntro = playedLetters.length > 0 ? `Lettre${s}déjà jouée${s}: ` : ""
    return (
        <div className="playedLetters">
            {alreadyPlayedTxtIntro}
            {playedLetters.map((letter, index) => 
                <span key={index} className={letter.good ? "green" : "red"}>{letter.value}</span>
            )}
        </div>
    )
}