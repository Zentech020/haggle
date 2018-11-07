import React, { Component } from 'react';

import './styles.scss';

class ProductCard extends Component {
  render() {
    const {
      subtitle,
      Title,
      logo,
      productImage,
      backgroundCard,
      color,
      colorButton,
      backgroundButton
    } = this.props;
    const stylesBg = {
      background: backgroundCard
    };

    const stylesColor = {
      color
    };

    const buttonStyle = {
      color: colorButton,
      background: backgroundButton
    };

    return (
      <div style={stylesBg} className="ProductCard">
        <div className="ProductCard__header">
          <img src={logo} alt="logo" />
        </div>
        <div className="ProductCard__content">
          <p style={stylesColor}>{subtitle}</p>
          <h3 style={stylesColor}>{Title}</h3>
        </div>
        <div className="ProductCard__button">
          <button style={buttonStyle} type="button">
            GET DISCOUNT
          </button>
        </div>
        <div className="ProductCard__image">
          <img src={productImage} alt="product" />
        </div>
      </div>
    );
  }
}

export default ProductCard;
