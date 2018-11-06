import React, { Component, Fragment } from 'react';
import './styles.scss';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      currentQuestionNum: 0,
      showingResponse: false,
      reactionIsPositive: null,
      amountCorrectAnswers: 0
    };
  }

  guess = guessId => {
    const { currentQuestionNum, amountCorrectAnswers } = this.state;
    const { correctAnswers } = this.props;
    if (guessId === correctAnswers[currentQuestionNum]) {
      alert('yo');
      this.setState({
        amountCorrectAnswers: amountCorrectAnswers + 1
      });
    }
    this.setState({
      currentQuestionNum: currentQuestionNum + 1
    });
  };

  renderResponse = () => {};

  renderCardbody = (
    started,
    questions,
    answers,
    showingResponse,
    currentQuestionNum
  ) => {
    const { amountCorrectAnswers } = this.state;
    if (!started) {
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

    if (currentQuestionNum < questions.length) {
      const answerBlock = answers[currentQuestionNum].map(answer => (
        <button type="button" onClick={() => this.guess(answer.id)}>
          {answer.title}
        </button>
      ));

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
    }
    return (
      <Fragment>
        <div className="card__question">
          <p>
            Great job! You earned a {(amountCorrectAnswers + 1) * 5}% discount!
          </p>
        </div>
      </Fragment>
    );
  };

  render() {
    const { headerTitle, questions, answers } = this.props;
    const {
      started,
      showingResponse,
      reactionIsPositive,
      currentQuestionNum
    } = this.state;

    return (
      <div className="card">
        <div className="card__header">
          <p>{headerTitle}</p>
        </div>
        <div className="card__animation">
          <img src="https://i.imgur.com/xofVHtB.png" alt="animation" />
          {this.renderResponse(showingResponse, reactionIsPositive)}
        </div>
        {this.renderCardbody(
          started,
          questions,
          answers,
          showingResponse,
          currentQuestionNum
        )}
      </div>
    );
  }
}

export default Card;
