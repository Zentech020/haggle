import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { LeftBlock, RightBlock } from '../../components';
import './styles.scss';

class Home extends PureComponent {
  render() {
    return (
      <div className="Home body">
        <Helmet title="Boilerplate" />
        <div className="landing">
          <LeftBlock />
          <RightBlock />
        </div>
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
