import React, { Component } from 'react';
import logo from '../../../../public/assets/arqade_logo.png';
import './styles.scss';

class LeftBlock extends Component {
  render() {
    return (
      <div className="left">
        <div className="left__logo">
          <img src={logo} alt="arqade" />
        </div>

        <div className="left__content">
          <h2>Game Case</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="left__next">
          <button className="red__button" type="button">
            next
          </button>
        </div>

        <div className="left__review">
          <p>Show us what you think of this idea</p>
        </div>
      </div>
    );
  }
}

export default LeftBlock;
