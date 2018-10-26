import React, { Component } from 'react';
import './styles.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <p>Arcade</p>
        <button className="header__cta" type="button">
          write a review
        </button>
      </div>
    );
  }
}

export default Header;
