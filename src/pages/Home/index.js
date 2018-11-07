import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-scroll';
import { Start, ProductCard, Popup } from '../../components';
import './styles.scss';

class Home extends PureComponent {
  render() {
    return (
      <div className="Home body">
        <Helmet title="Arqade - discounts improved" />
        <Start />
        <div className="ProductContainer">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <Link
          className="content__review"
          to="review"
          spy
          smooth
          duration={1000}
        >
          <p>Show us what you think of this idea</p>
        </Link>
        <Popup />
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
