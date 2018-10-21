import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import './styles.scss';

class Home extends PureComponent {
  render() {
    return (
      <div className="Home body">
        <Helmet title="Boilerplate" />
        <h1>Hello World!</h1>
        <p>Lets build something cool.</p>

        <div className="card">
          <div className="card__title">Card title</div>
          <div className="card__body">
            <img className="card__avatar" alt="avatar" />
          </div>
          <div className="card__text_box">TEXTY</div>
          <button className="card__secondary_button" type="button">
            Answer 1
          </button>
          <button className="card__secondary_button" type="button">
            Answer 2
          </button>
          <button className="card__primary_button" type="button">
            [company-name-verbified]
          </button>
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
