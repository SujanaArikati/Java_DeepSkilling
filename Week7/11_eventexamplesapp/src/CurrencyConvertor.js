
// src/CurrencyConvertor.js
import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euro: ''
    };
  }

  handleChange = (event) => {
    this.setState({ rupees: event.target.value });
  };

  handleSubmit = () => {
    const rate = 0.011; // Assume 1 INR = 0.011 Euro
    const result = this.state.rupees * rate;
    this.setState({ euro: result.toFixed(2) });
  };

  render() {
    return (
      <div>
        <h2>Currency Converter (INR to Euro)</h2>
        <input
          type="number"
          placeholder="Enter amount in INR"
          value={this.state.rupees}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Convert</button>

        {this.state.euro && (
          <p>
            <strong>Converted Amount: €{this.state.euro}</strong>
          </p>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
