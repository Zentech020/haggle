import React, { Component } from 'react';
// import Card from '../Card';
// import wave1 from '../../../../public/assets/wave-1.png';
// import wave2 from '../../../../public/assets/wave-2.png';
// import wave3 from '../../../../public/assets/wave-3.png';
// import wave4 from '../../../../public/assets/wave-4.png';
// import wave5 from '../../../../public/assets/wave-5.png';

import './styles.scss';

class RightBlock extends Component {
  render() {
    return (
      <div className="right">
        {/* <img className="wave__one" src={wave1} alt="wave1" />
        <img className="wave__two" src={wave2} alt="wave2" />
        <img className="wave__three" src={wave3} alt="wave3" />
        <img className="wave__four" src={wave4} alt="wave4" />
        <img className="wave__five" src={wave5} alt="wave5" /> */}

        {/* <p>Waves + cards</p> */}

        {/* <Card /> */}
        {/* <svg width={483} height={794} xmlnsXlink="http://www.w3.org/1999/xlink">
          <title>Path</title>
          <defs>
            <linearGradient
              x1="42.507%"
              y1="16.045%"
              x2="40.795%"
              y2="87.681%"
              id="c"
            >
              <stop stopColor="#F9D423" offset="0%" />
              <stop stopColor="#EA8179" offset="53.599%" />
              <stop stopColor="#E14FAD" offset="100%" />
            </linearGradient>
            <path
              d="M21.393 950.378c39.335-28.52 200.361 18.37 287 168.764 86.638 150.395 156 94.61 255.638 29.362 99.639-65.249 181.189-44.705 297 36.65 91 63.927 158 88.645 272 8.524 114-80.12 214-113.362 395 55.403 181 168.764-42.638 122.356-42.638 122.356l-1418-77.564s-85.336-314.976-46-343.495z"
              id="b"
            />
            <filter
              x="-2.6%"
              y="-16.9%"
              width="105.1%"
              height="122.5%"
              filterUnits="objectBoundingBox"
              id="a"
            >
              <feOffset dy={-33} in="SourceAlpha" result="shadowOffsetOuter1" />
              <feGaussianBlur
                stdDeviation={8}
                in="shadowOffsetOuter1"
                result="shadowBlurOuter1"
              />
              <feColorMatrix
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0693217844 0"
                in="shadowBlurOuter1"
              />
            </filter>
          </defs>
          <g
            transform="rotate(103 1039.551 430.606)"
            fillRule="nonzero"
            fill="none"
          >
            <use fill="#000" filter="url(#a)" xlinkHref="#b" />
            <use fill="url(#c)" xlinkHref="#b" />
          </g>
        </svg> */}
      </div>
    );
  }
}

export default RightBlock;
