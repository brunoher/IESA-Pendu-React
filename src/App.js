import React, { Component } from 'react';
import './App.css';
import {Letters} from './Letters.js';



const word = "Quenelle" 

class App extends Component {
  /*constructor(props) {
    super(props)
    this.state = {
      restart: false
    }
  }*/

  render() {
    
    return (
      <div className="main-container">
        <Letters word={word}/> 
      </div>
    );
  }
}

export default App;
