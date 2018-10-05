import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="portfolio-name">Portfolio Name</h1>
        <nav className="menu">
          <div className="menu">Menu &#9650; </div>
        </nav>
      </header>
    );
  }
}

export default Header;
