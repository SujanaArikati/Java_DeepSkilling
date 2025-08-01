// src/App.js
import React, { Component } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    let page;
    let button;

    if (this.state.isLoggedIn) {
      page = <UserPage />;
      button = <button onClick={this.handleLogout}>Logout</button>;
    } else {
      page = <GuestPage />;
      button = <button onClick={this.handleLogin}>Login</button>;
    }

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>Flight Ticket Booking App</h1>
        {button}
        <hr />
        {page}
      </div>
    );
  }
}

export default App;

