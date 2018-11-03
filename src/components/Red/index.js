import React, { Component } from 'react';
import Leftblock from './LeftBlock';
import Rightblock from './RightBlock';

class Red extends Component {
  render() {
    return (
      <div className="landing">
        <Leftblock />
        <Rightblock />
      </div>
    );
  }
}

export default Red;
