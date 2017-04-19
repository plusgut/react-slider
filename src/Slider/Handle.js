import React, { Component } from 'react';
import './Handle.css'

class Handle extends Component {
  getPercentage() {
    return (this.props.value / this.props.to) * 100;
  }
  
  getPosition() {
    return {
      left: this.getPercentage() + '%',
    };
  }

  render() {
    console.log(this.props)
    return (
      <div className="handle" style={this.getPosition()}></div>
    );
  }
}

export default Handle;
