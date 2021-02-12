import * as React from 'react';
import PropTypes from 'prop-types';

import byAlphabeticalOrder from '../../utils/byAlphabeticalOrder';
import Button from '../Button/Button';
import { ReactComponent as Checkmark } from '../../assets/checkmark.svg';
import { ReactComponent as IconX } from '../../assets/icon-X.svg';

import style from './Question.module.scss';

function Question({ questionsData, setPoints, setIsPlaying }) {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [showResults, setShowResults] = React.useState('hidden');

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
    setShowResults('visible');

    setTimeout(() => {
      if (currentQuestion === questionsData.length - 1) {
        setIsPlaying(false);
      }
      setShowResults('hidden');
      setCurrentQuestion((currentQuestion) => currentQuestion + 1);
    }, 500);
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
              <Button handleClick={() => checkAnswer(answer)}>
                <span>
                  {answer}
                  {answer === correctAnswer ? (
                    <Checkmark
                      height="18px"
                      style={{
                        visibility: showResults,
                      }}
                    />
                  ) : (
                    <IconX height="18px" style={{ visibility: showResults }} />
                  )}
                </span>
              </Button>
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
