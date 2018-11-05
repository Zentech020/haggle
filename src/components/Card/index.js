import React, { Component, Fragment } from 'react';
import './styles.scss';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      currentQuestionNum: 0,
      showingResponse: false,
      reactionIsPositive: null
    };
  }

  guess = guessStr => {
    const { currentQuestionNum, correctAnswers } = this.state;
    if (guessStr === correctAnswers[currentQuestionNum]) {
      this.respond(true);
      alert('yo');
    }
    this.respond(false);
  };

  respond = correctBool => {
    if (correctBool) {
      this.setState({ showingResponse: true, reactionIsPositive: true });
    } else {
      this.setState({ showingResponse: true, reactionIsPositive: false });
    }
  };

  renderCardbody = (
    started,
    questions,
    answers,
    showingResponse,
    currentQuestionNum
  ) => {
    const answerBlock = (answers[currentQuestionNum] || []).map(answer => (
      <button type="button">{answer.title}</button>
    ));

    if (started) {
      return (
        <Fragment>
          <div className="card__question">
            <p>Are you ready?</p>
          </div>
          <div className="card__submit">
            <button
              type="button"
              onClick={() => this.setState({ started: true })}
            >
              I was born ready
            </button>
          </div>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <div className="card__question">
          <p>{questions[currentQuestionNum]}</p>
        </div>
        <div className="card__answers">{answerBlock}</div>
        <div className="card__submit">
          <button type="button">try</button>
        </div>
      </Fragment>
    );
  };

  render() {
    const { headerTitle, questions, answers } = this.props;
    const { started, showingResponse, reactionIsPositive } = this.state;

    return (
      <div className="card">
        <div className="card__header">
          <p>{headerTitle}</p>
        </div>
        <div className="card__animation">
          <img src="https://i.imgur.com/xofVHtB.png" alt="animation" />
          {showingResponse && reactionIsPositive ? (
            <p> response pos </p>
          ) : (
            <p> response neg </p>
          )}
        </div>
        {this.renderCardbody(started, questions, answers, showingResponse)}
      </div>
    );
  }
}

export default Card;
