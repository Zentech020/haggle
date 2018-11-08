import React, { Component } from 'react';
import { Link } from 'react-scroll';
import ProductCard from '../ProductCard';
import hm from '../../images/hm_logo.png';
import boots from '../../images/Boots.png';
import nikeLogo from '../../images/nike_logo.png';
import nikeShirt from '../../images/nike_shirt.png';
import PlaystationLogo from '../../images/playstation_logo.png';
import controller from '../../images/controller.png';
import vinylLogo from '../../images/vinyl_logo.png';
import bobDylan from '../../images/bobdylan_lp.png';

import './styles.scss';

const COLORS = {
  white: '#fff',
  black: '#000'
};

const CARDS = [
  {
    logo: hm,
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    title: 'Men’s original 500 boots',
    productImage: boots,
    background: '#4ad4fd',
    color: COLORS.white,
    colorButton: COLORS.white,
    backgroundButton: COLORS.black
  },
  {
    logo: vinylLogo,
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    title: 'Bob Dylan 12" Album',
    productImage: bobDylan,
    background: '#DE4329',
    color: COLORS.white,
    colorButton: COLORS.white,
    backgroundButton: COLORS.black
  },

  {
    logo: nikeLogo,
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    title: 'Paris saint germain squad top',
    productImage: nikeShirt,
    background: COLORS.white,
    color: COLORS.black,
    colorButton: COLORS.white,
    backgroundButton: COLORS.black
  },

  {
    logo: PlaystationLogo,
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    title: 'Sony DualShock 4 Controller',
    productImage: controller,
    background: COLORS.black,
    color: COLORS.white,
    colorButton: COLORS.black,
    backgroundButton: COLORS.white
  }
];

class Landing extends Component {
  render() {
    const cards = CARDS.map(card => (
      <ProductCard
        subtitle={card.subtitle}
        Title={card.title}
        logo={card.logo}
        productImage={card.productImage}
        backgroundCard={card.background}
        color={card.color}
        colorButton={card.colorButton}
        backgroundButton={card.backgroundButton}
      />
    ));
    return (
      <div>
        <div className="landingpage">
          <div className="landingpage__logo">
            <p>Arqade</p>
          </div>
          <div className="landingpage__content">
            <h4>
              Hey there you
              <span role="img" aria-label="hi">
                👋
              </span>
            </h4>
            <p>
              Do you like discounts? Of course you do, discounts are awesome.
              But scraping together promo codes or waiting for sale? Decidedly
              not awesome. We at Arqade think receiving discounts should be as
              fun as the discounts themselves.
            </p>
          </div>
          <div className="landingpage__buttons">
            <Link className="cta1" to="product" spy smooth duration={1000}>
              Get discount
            </Link>
            <a
              href="https://zenobruinsma.typeform.com/to/YnIZnL"
              data-mode="popup"
              className="cta2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Write a review
            </a>
          </div>
        </div>
        <div name="product" className="ProductContainer">
          {cards}
        </div>
      </div>
    );
  }
}

export default Landing;
