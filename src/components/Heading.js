import React, { Component } from 'react';
import './heading.css';

class Heading extends Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClickArrow = this.handleClickArrow.bind(this);
  }

  handleClickArrow() {
    let windowHeight = window.innerHeight;
    window.scrollBy(0, windowHeight);
  }

  handleOnMouseOver() {
    let h1 = document.querySelector("h1");
    h1.style.color = "#edad00";
    h1.style.borderColor = "#edad00";
  }

  handleOnMouseOut() {
    let h1 = document.querySelector("h1");
    h1.style.color = "#ffd700";
    h1.style.borderColor = "#ffd700";
  }

  render() {
    return (
      <div>
        <div className="headingContainer">
          <h1>Star<br/>Wars</h1>
          <a className="arrow" onMouseOut={this.handleOnMouseOut} onMouseOver={this.handleOnMouseOver} onClick={this.handleClickArrow}><i className="fas fa-angle-down fa-5x"></i></a>
        </div>
      </div>
    );
  }
}

export default Heading;