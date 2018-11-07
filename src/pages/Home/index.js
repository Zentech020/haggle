import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { Start, Sneaker, Red, X, Review, ProductCard } from '../../components';
import hm from '../../images/hm_logo.png';
import boots from '../../images/Boots.png';
import seinheiserLogo from '../../images/seinheiser_logo.png';
import headphone from '../../images/headphone.png';
import nikeLogo from '../../images/nike_logo.png';
import nikeShirt from '../../images/nike_shirt.png';
import PlaystationLogo from '../../images/playstation_logo.png';
import controller from '../../images/controller.png';
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
    logo: seinheiserLogo,
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    title: 'Sennheiser HD 4.50 BTNC',
    productImage: headphone,
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

class Home extends PureComponent {
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
      <div className="Home body">
        <Helmet title="Arqade - discounts improved" />
        <Start />
        <Sneaker />
        <Red />
        <X />
        <Review />
        <div className="ProductContainer">{cards}</div>
      </div>
    );
  }
}

/* Redux connector */
/*
const connector = connect(
  ({ reducer }) => ({ reducer }),
  dispatch => ({
    action1: arg =>
      dispatch(actions.action1(arg)),
  })
);
*/

export default Home;
