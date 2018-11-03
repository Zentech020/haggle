import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { Start, Sneaker, Red, X } from '../../components';
import './styles.scss';

class Home extends PureComponent {
  render() {
    return (
      <div className="Home body">
        <Helmet title="Boilerplate" />

        <Start />
        <Sneaker />
        <Red />
        <X />
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
