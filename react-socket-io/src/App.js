import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {subscribeToTimer} from './api';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timestamp: 'no timestamp yet'
    };
    subscribeToTimer((err, timestamp) => this.setState({timestamp}));

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>What time is it?</h2>
        </div>
        <p className="App-intro">
          This is the timer value: {this.state.timestamp}
        </p>
      </div>
    );
  }
}

export default App;
