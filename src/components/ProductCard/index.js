import React, { Component, Fragment } from 'react';

import './styles.scss';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false
    };
  }

  onGetDiscountButtonPress = () => {
    this.setState({ started: true });
  };

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

    const { started } = this.state;

    return (
      // <div style={stylesBg} className="ProductCard">
      //   <div className="ProductCard__header">
      //     <img src={logo} alt="logo" />
      //   </div>
      //   <div className="ProductCard__content">
      //     <p style={stylesColor}>{subtitle}</p>
      //     <h3 style={stylesColor}>{Title}</h3>
      //   </div>
      //   <div className="ProductCard__button">
      //     <button style={buttonStyle} type="button">
      //       GET DISCOUNT
      //     </button>
      //   </div>
      //   <div className="ProductCard__image">
      //     <img src={productImage} alt="product" />
      //   </div>

      <div style={stylesBg} className="ProductCard">
        {!started ? (
          <Fragment>
            <div className="ProductCard__header">
              <img src={logo} alt="logo" />
            </div>
            <div className="ProductCard__content">
              <p style={stylesColor}>{subtitle}</p>
              <h3 style={stylesColor}>{Title}</h3>
            </div>
            <div className="ProductCard__button">
              <button
                style={buttonStyle}
                type="button"
                onClick={() => this.onGetDiscountButtonPress()}
              >
                GET DISCOUNT
              </button>
            </div>
            <div className="ProductCard__image">
              <img src={productImage} alt="product" />
            </div>
          </Fragment>
        ) : (
          <p> hellooo </p>
        )}
      </div>
    );
  }
}

export default ProductCard;
