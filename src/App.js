import React, {Component} from 'react';
import './App.css';
import ResultsContainer from './components/ResultsContainer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-intro">
                    <ResultsContainer />
                </div>
            </div>
        );
    }
}

export default App;
