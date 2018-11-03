import React, { Component } from 'react';
// import Card from '../Card';

import './styles.scss';

class RightBlock extends Component {
  render() {
    return (
      <div className="right">
        <video name="x" className="right__sneaker" autoPlay muted loop>
          <source src="https://my.mixtape.moe/jxhpku.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default RightBlock;
