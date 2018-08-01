import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import './scrollTop.css';

class ScrollTop extends Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClickScroll = this.handleClickScroll.bind(this);
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll, false);
  }

  handleScroll() {
    let windowHeight = window.innerHeight;
    let scrollPoint = windowHeight + window.pageYOffset;
    let arrow = document.querySelector(".scrolltop");

    if(scrollPoint > 1800) {
      arrow.style.display = "block";
    } else {
      arrow.style.display = "none";
    }
    console.log(windowHeight, scrollPoint);
  }

  handleClickScroll() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Zoom delay={500}>
          <a className="scrolltop" onClick={this.handleClickScroll}><i className="fas fa-angle-up fa-4x"></i></a>
        </Zoom>
      </div>
    );
  }
}

export default ScrollTop;