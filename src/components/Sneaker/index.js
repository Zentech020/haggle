import React, { Component, Fragment } from 'react';
import { Link } from 'react-scroll';
import ColumnContent from '../ColumnContent';
import ColumnCard from '../ColumnCard';

class Sneaker extends Component {
  render() {
    return (
      <div className="landing">
        <ColumnCard />
        <ColumnContent
          content=<Fragment>
            <h2>Sneakers</h2>
            <p>Text about sneakers wow</p>
          </Fragment>
          nextButton=<Link to="red" spy smooth duration={1000}>
            <button className="sneaker__button" type="button">
              next
            </button>
          </Link>
        />
      </div>
    );
  }
}

export default Sneaker;
