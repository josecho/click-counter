import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div data-test="component-app">
      <h1 data-test="counter-display">counter display</h1>
      <button data-test="increment-button">Increment counter</button>
        
      </div>
    );
  }
}

export default App;
