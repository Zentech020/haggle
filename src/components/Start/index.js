import React, { Component, Fragment } from 'react';
import { Link } from 'react-scroll';
import ColumnContent from '../ColumnContent';

class Start extends Component {
  render() {
    return (
      <div className="landing">
        <ColumnContent
          content=<Fragment>
            <h2>Start</h2>
            <h3>Hey there you!</h3>
            <p>
              Do you like discounts? Of course you do, discounts are awesome.
              But scraping together promo codes or waiting for sale? Decidedly
              not awesome. We at Arqade think receiving discounts should be as
              fun as the discounts themselves.
            </p>
          </Fragment>
          nextButton=<Link to="yeezy" spy smooth duration={1000}>
            <button className="start__button" type="button">
              next
            </button>
          </Link>
        />
      </div>
    );
  }
}

export default Start;
