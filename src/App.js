import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ResultsContainer from './ResultsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
            <ResultsContainer></ResultsContainer>
        </p>
      </div>
    );
  }
}

export default App;
