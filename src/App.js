import React, { Component } from 'react';
import classnames from 'classnames';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleDragStart = event => {
    console.log('handleDragStart', event);
  };

  handleDrop = event => {
    console.log('handleDrop', event);
  };
  handleDragEnd = event => {
    console.log('handleDragEnd', event);
  };
  handleDragOver = event => {
    console.log('handleDragOver', event);
  };
  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="portfolio-name">Portfolio Name</h1>
          <nav className="menu">
            <div className="menu">Menu &#9650; </div>
          </nav>
        </header>
        <main>
          <div className="left" />
          <div className="right" />
          <div
            className="center"
            draggable="true"
            onDragStart={this.handleDragStart}
            onDrop={this.handleDrop}
            onDragOver={this.handleDragOver}
            onDragEnd={this.handleDragEnd}
          />
        </main>
      </div>
    );
  }
}

export default App;
