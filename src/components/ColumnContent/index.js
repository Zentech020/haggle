import React, { Component } from 'react';
import './styles.scss';
import logo from '../../images/arqade_logo.png';

class ColumnContent extends Component {
  render() {
    const { content, nextButton } = this.props;
    return (
      <div className="content">
        <div className="content__logo">
          <img src={logo} alt="arqade" />
        </div>

        <div className="content__content">{content}</div>

        <div className="content__next">{nextButton}</div>
      </div>
    );
  }
}

export default ColumnContent;
