import React, { Component } from 'react';
import hmLogo from '../../images/hm_logo.png';
import boots from '../../images/Boots.png';

import './styles.scss';

class ProductCard extends Component {
  render() {
    return (
      <div className="ProductCard">
        <div className="ProductCard__header">
          <img src={hmLogo} alt="logo" />
        </div>
        <div className="ProductCard__content">
          <p>Lorem ipsum gato el vato</p>
          <h3>MENS ORIGINAL 500 BOOTS</h3>
        </div>
        <div className="ProductCard__button">
          <button type="button">GET DISCOUNT</button>
        </div>
        <div className="ProductCard__image">
          <img src={boots} alt="product" />
        </div>
      </div>
    );
  }
}

export default ProductCard;
