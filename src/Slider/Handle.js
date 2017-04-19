import React, { Component } from 'react';
import './Handle.css';

class Handle extends Component {
  constructor(props) {
    super(props);

    this.unsetClicked();
    document.addEventListener('mousemove', this.onMouseMove.bind(this));
    document.addEventListener('mouseup', this.onMouseUp.bind(this));
  }

  unsetClicked() {
    this.clickedPosition = null;
  }

  getCurrentPercentage() {
    return (this.props.value / this.props.to) * 100;
  }

  getPercentage() {
    return (1 / this.props.to) * 100;
  }
  
  getPosition() {
    return {
      left: this.getCurrentPercentage() + '%',
    };
  }

  onMouseDown(evt) {
    this.clickedValue = this.props.value;
    this.clickedPosition = evt.pageX;
  }

  onMouseMove(evt) {
    if (this.clickedPosition !== null) {
      var relativePixel = evt.pageX - this.clickedPosition;
      var newValue = Math.round(relativePixel * this.getPercentage());
      if(newValue !== this.props.value) {
        this.props.onChange(newValue);
      }
    }
  }

  onMouseUp(evt) {
    this.unsetClicked();
  }

  render() {
    console.log(this.props)
    return (
      <div className="handle" style={this.getPosition()} onMouseDown={this.onMouseDown.bind(this)}></div>
    );
  }
}

export default Handle;
