import React, { Component } from 'react';
import logo from './logo.svg';
import NotificationButton from './NotificationButton';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to the push-notification demo!
          </p>
          <NotificationButton />
        </header>
      </div>
    );
  }
}

export default App;
