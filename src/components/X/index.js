import React, { Component } from 'react';
import Leftblock from './LeftBlock';
import Rightblock from './RightBlock';

class X extends Component {
  render() {
    return (
      <div className="landing">
        <Rightblock />
        <Leftblock />
      </div>
    );
  }
}

export default X;
