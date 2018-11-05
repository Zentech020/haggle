import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { Start, Sneaker, Red, X, Review } from '../../components';
import './styles.scss';

class Home extends PureComponent {
  render() {
    return (
      <div className="Home body">
        <Helmet title="Arqade - discounts improved" />

        <Start />
        <Sneaker />
        <Red />
        <X />
        <Review />
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
