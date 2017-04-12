import React, { Component } from 'react';
import Slider from './Slider';
import Handle from './Handle';

const ONE_DAY = 24*3600*1000;
class Timeslider extends Component {
  getDayDiff(from ,to) {
    return (to.getTime() - from.getTime()) / ONE_DAY;
  }

  render() {
    var min  = 0;
    var max  = this.getDayDiff(this.props.min, this.props.max);
    var from = this.getDayDiff(this.props.min, this.props.from);
    var to   = this.getDayDiff(this.props.min, this.props.to);

    return (
      <Slider>
        <Handle min={min} max={max} from={min} to={to} current={from} onChange={this.props.fromChange}/>
        <Handle min={min} max={max} from={from} to={max} current={to}  onChange={this.props.toChange}/>
      </Slider>
    );
  }
}

export default Timeslider;
