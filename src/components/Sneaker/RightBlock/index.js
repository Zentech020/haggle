import React, { Component } from 'react';
import Card from '../../Card';

import '../../../../node_modules/video-react/dist/video-react.css'; // import css
import './styles.scss';

class RightBlock extends Component {
  render() {
    const answers = [
      [
        {
          id: 0,
          title: 'right one'
        },
        {
          id: 1,
          title: 'wrong one'
        },
        {
          id: 2,
          title: 'wrong one'
        }
      ],
      [
        {
          id: 0,
          title: 'wrong one'
        },
        {
          id: 1,
          title: 'right one'
        },
        {
          id: 2,
          title: 'wrong one'
        }
      ],
      [
        {
          id: 0,
          title: 'wrong one'
        },
        {
          id: 1,
          title: 'wrong one'
        },
        {
          id: 2,
          title: 'right one'
        }
      ]
    ];

    const rightAnswers = [0, 1, 2];

    const questions = ['question 1', 'question 2', 'question 3'];

    return (
      <div className="right">
        <Card
          headerTitle="Yeezy boost 350"
          answers={answers}
          rightAnswers={rightAnswers}
          questions={questions}
        />
        <video name="yeezy" className="right__sneaker" autoPlay muted loop>
          <source src="https://my.mixtape.moe/cxzarp.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default RightBlock;
