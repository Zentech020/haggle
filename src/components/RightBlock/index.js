import React, { Component } from 'react';
import Card from '../Card';
import './styles.scss';

class LeftBlock extends Component {
  render() {
    return (
      <div className="right">
        <p>Waves + cards</p>

        <Card />
      </div>
    );
  }
}

export default LeftBlock;
