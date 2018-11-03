import React, { Component } from 'react';
// import Card from '../Card';

import '../../../../node_modules/video-react/dist/video-react.css'; // import css
import './styles.scss';

class RightBlock extends Component {
  render() {
    return (
      <div className="right">
        <video name="yeezy" className="right__sneaker" autoPlay muted loop>
          <source src="https://my.mixtape.moe/cxzarp.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default RightBlock;
