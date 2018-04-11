import React from 'react';
import './Letter.css';

export function Letter({letter}) {
	return <div className="letter">{letter[1] ? letter : '_'}</div>
}