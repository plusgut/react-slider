import React, { Component } from 'react';
import './Slider.css';

class Slider extends Component {
  render() {
    return (
      <div className="slider">
        {this.props.children}
      </div>
    );
  }
}

export default Slider;
