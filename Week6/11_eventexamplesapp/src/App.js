// src/App.js
import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  sayHello = () => {
    alert("Hello! This is a static message.");
  };

  increase = () => {
    this.increment();
    this.sayHello();
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  sayWelcome = (msg) => {
    alert("Welcome message: " + msg);
  };

  handleSyntheticEvent = (event) => {
    alert("I was clicked");
    console.log("Synthetic Event Object:", event);
  };

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>React Event Handling</h1>

        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.increase}>Increment</button>{' '}
        <button onClick={this.decrement}>Decrement</button>

        <hr />

        <button onClick={() => this.sayWelcome("Welcome to React Events!")}>
          Say Welcome
        </button>

        <hr />

        <button onClick={this.handleSyntheticEvent}>
          Click for Synthetic Event
        </button>

        <hr />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;

