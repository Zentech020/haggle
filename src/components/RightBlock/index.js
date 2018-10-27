import React, { Component } from 'react';
// import Card from '../Card';
import wave1 from '../../../public/assets/wave-1.png';
import wave2 from '../../../public/assets/wave-2.png';
import wave3 from '../../../public/assets/wave-3.png';
import wave4 from '../../../public/assets/wave-4.png';
import wave5 from '../../../public/assets/wave-5.png';

import './styles.scss';

class LeftBlock extends Component {
  render() {
    return (
      <div className="right">
        <img className="wave__one" src={wave1} alt="wave1" />
        <img className="wave__two" src={wave2} alt="wave2" />
        <img className="wave__three" src={wave3} alt="wave3" />
        <img className="wave__four" src={wave4} alt="wave4" />
        <img className="wave__five" src={wave5} alt="wave5" />

        {/* <p>Waves + cards</p> */}

        {/* <Card /> */}
      </div>
    );
  }
}

export default LeftBlock;
