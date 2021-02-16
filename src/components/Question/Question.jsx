import * as React from 'react';
import PropTypes from 'prop-types';

import byAlphabeticalOrder from '../../utils/byAlphabeticalOrder';
import Answer from '../Answer/Answer.jsx';

import style from './Question.module.scss';

function Question({ questionsData, setPoints, setIsPlaying }) {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  const {
    category,
    difficulty,
    question,
    correctAnswer,
    incorrectAnswers,
    type,
  } = questionsData[currentQuestion];

  const answers = [correctAnswer, ...incorrectAnswers].sort(
    byAlphabeticalOrder,
  );

  const checkAnswer = (answer) => {
    if (answer === correctAnswer) {
      switch (type) {
        case 'multiple':
          setPoints((points) => points + 10);
          break;

        case 'boolean':
          setPoints((points) => points + 5);
          break;
      }
    }

    setTimeout(() => {
      if (currentQuestion === questionsData.length - 1) {
        setIsPlaying(false);
      } else {
        setCurrentQuestion((currentQuestion) => currentQuestion + 1);
      }
    }, 750);
  };

  return (
    <>
      <section className={style.info}>
        <p className={style.number}>{`${currentQuestion + 1}/10`}</p>
        <p className={style.text}>
          {category} - <span className={style[difficulty]}>{difficulty}</span>
        </p>
      </section>
      <section className={style.questionContainer}>
        <div>{question}</div>
      </section>
      <section className={style.answers}>
        <ul>
          {answers.map((answer) => (
            <li key={answer}>
              <Answer
                answer={answer}
                checkAnswer={checkAnswer}
                correctAnswer={correctAnswer}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

Question.propTypes = {
  questionsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPoints: PropTypes.func.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
};

export default Question;
