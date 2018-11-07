import React, { Component, Fragment } from 'react';
import hmLogo from '../../images/hm_logo.png';
import boots from '../../images/Boots.png';

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
    const { started } = this.state;
    return (
      <div className="ProductCard">
        {!started ? (
          <Fragment>
            <div className="ProductCard__header">
              <img src={hmLogo} alt="logo" />
            </div>
            <div className="ProductCard__content">
              <p>Lorem ipsum gato el vato</p>
              <h3>MENS ORIGINAL 500 BOOTS</h3>
            </div>
            <div className="ProductCard__button">
              <button
                type="button"
                onClick={() => this.onGetDiscountButtonPress()}
              >
                GET DISCOUNT
              </button>
            </div>
            <div className="ProductCard__image">
              <img src={boots} alt="product" />
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
