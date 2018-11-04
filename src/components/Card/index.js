import React, { Component } from 'react';
import './styles.scss';

class Card extends Component {
  render() {
    const { headerTitle, question, answers } = this.props;

    const answerBlock = (answers || []).map(answer => (
      <button type="button">{answer.title}</button>
    ));

    return (
      <div className="card">
        <div className="card__header">
          <p>{headerTitle}</p>
        </div>
        <div className="card__animation">
          <img src="https://i.imgur.com/xofVHtB.png" alt="animation" />
        </div>
        <div className="card__question">
          <p>{question}</p>
        </div>
        <div className="card__answers">{answerBlock}</div>
        <div className="card__submit">
          <button type="button">try</button>
        </div>
      </div>
    );
  }
}

export default Card;
