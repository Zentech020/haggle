import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { Landing } from '../../components';

import './styles.scss';

class Home extends PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Arqade - discounts improved" />
        {/* <Start />
        <Sneaker />
        <Red />
        <X />
        <Review /> */}
        <Landing />
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
