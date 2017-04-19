import React, { Component } from 'react';
import Slider from './Slider';
import Handle from './Handle';

const ONE_DAY = 24*3600*1000;
class Timeslider extends Component {
  getDayDiff(from ,to) {
    return (to.getTime() - from.getTime()) / ONE_DAY;
  }

  onChange(key, onChange, value) {
    // @TODO check if they are collided
    var newValue = new Date(this.props[key].getTime() + (value * ONE_DAY));
    onChange(newValue);
  }


  render() {
    var from      = 0;
    var to        = this.getDayDiff(this.props.from, this.props.to);
    var fromValue = this.getDayDiff(this.props.from, this.props.fromValue);
    var toValue   = this.getDayDiff(this.props.from, this.props.toValue);
    

    var handles = [{
        value: fromValue,
        onChange: this.onChange.bind(this, 'fromValue', this.props.fromChange),
      }, {
        value: toValue,
        onChange: this.onChange.bind(this, 'toValue', this.props.toChange),
    }];

    return (
      <Slider>
        {handles.map((handle, index) =>
          <Handle key={index} from={from} to={to} value={handle.value} onChange={handle.onChange}/>
        )}
      </Slider>
    );
  }
}

export default Timeslider;
