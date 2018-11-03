import React, { Component } from 'react';
import Leftblock from './LeftBlock';
import Rightblock from './RightBlock';

class X extends Component {
  render() {
    return (
      <div className="landing">
        <Leftblock />
        <Rightblock />
      </div>
    );
  }
}

export default X;
