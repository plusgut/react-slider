import React, { Component } from 'react';
import Slider from './Slider';
import Handle from './Handle';

const ONE_DAY = 24*3600*1000;
class Timeslider extends Component {
  getDayDiff(from ,to) {
    return (to.getTime() - from.getTime()) / ONE_DAY;
  }

  onChange(index, onChange, value) {
    // @TODO check if they are collided
    // @TODO change value to new Date(value)
    onChange(value);
  }


  render() {
    var to   = this.getDayDiff(this.props.from, this.props.to);

    var handles = [{
        value: 0,
        onChange: this.onChange.bind(this, 0, this.props.toChange),
      }, {
        value: to,
        onChange: this.onChange.bind(this, 1, this.props.fromChange),
    }];

    return (
      <Slider>
        {handles.map((handle) =>
          <Handle from={handles[0].value} to={handles[handles.length - 1].value} value={handle.value} onChange={handle.onChange}/>
        )}
        {/*<Handle min={min} max={max} from={min} to={to} current={from} onChange={this.props.fromChange}/>
        <Handle min={min} max={max} from={from} to={max} current={to}  onChange={this.props.toChange}/>*/}
      </Slider>
    );
  }
}

export default Timeslider;
