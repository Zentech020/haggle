import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';

import 'rc-slider/assets/index.css';

const Handle = Slider.Handle;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      haggle: false,
      startprice: 88,
      endPrice: 99,
      negotaitePrice: 0
    };

    this.onHaggle = this.onHaggle.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onNegotaite = this.onNegotaite.bind(this);
    this.onGoodPrice = this.onGoodPrice.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onHaggle() {
    this.setState({
      haggle: true
    });
  }

  onCancel() {
    this.setState({
      haggle: false
    });
  }

  onGoodPrice() {
    console.log('good price');
  }

  onNegotaite() {}

  onChange(e) {
    this.setState({
      negotaitePrice: e
    });
  }
  render() {
    const { haggle, startprice, endPrice, negotaitePrice } = this.state;
    console.log(startprice);
    return (
      <div className="App">
        <section>
          <div class="pricing pricing-palden">
            <div class="pricing-item">
              <div class="pricing-deco">
                <svg
                  class="pricing-deco-img"
                  enable-background="new 0 0 300 100"
                  height="100px"
                  id="Layer_1"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 300 100"
                  width="300px"
                  x="0px"
                  xmlns="http://www.w3.org/2000/svg"
                  y="0px"
                >
                  <path
                    class="deco-layer deco-layer--1"
                    d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                    fill="#FFFFFF"
                    opacity="0.6"
                  />
                  <path
                    class="deco-layer deco-layer--2"
                    d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                    fill="#FFFFFF"
                    opacity="0.6"
                  />
                  <path
                    class="deco-layer deco-layer--3"
                    d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z"
                    fill="#FFFFFF"
                    opacity="0.7"
                  />
                  <path
                    class="deco-layer deco-layer--4"
                    d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                    fill="#FFFFFF"
                  />
                </svg>
                <div class="pricing-price">
                  <span class="pricing-currency">$</span>
                  {haggle ? (
                    [negotaitePrice]
                  ) : (
                    <div>
                      {startprice}-{endPrice}{' '}
                    </div>
                  )}

                  <span class="pricing-period">/ mo</span>
                </div>
                <h3 class="pricing-title">Enterprise</h3>
              </div>
              <ul class="pricing-feature-list">
                <li class="pricing-feature">10 GB of space</li>
                <li class="pricing-feature">Support at $5/hour</li>
                <li class="pricing-feature">Full cloud access</li>
              </ul>
              {haggle ? (
                <div>
                  {' '}
                  <Slider
                    onChange={this.onChange}
                    min={startprice}
                    max={endPrice}
                    defaultValue={88 + 99 / 2}
                    handle={handle}
                  />
                  <button class="pricing-action" onClick={this.onGoodPrice}>
                    GIVE ME A GOOD PRICE
                  </button>
                  <button class="pricing-action" onClick={this.onNegotaite}>
                    NEGOTIATE
                  </button>
                  <button class="pricing-action" onClick={this.onCancel}>
                    X
                  </button>
                </div>
              ) : (
                <button onClick={this.onHaggle} class="pricing-action">
                  HAGGLE
                </button>
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
