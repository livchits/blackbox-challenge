import * as React from 'react';
import PropTypes from 'prop-types';

import style from './Question.module.scss';
function Question({
  questionsData,
  currentQuestion,
  setCurrentQuestion,
  setPoints,
}) {
  const {
    category,
    difficulty,
    question,
    correct_answer: correctAnswer,
    incorrect_answers: incorrectAnswers,
    type,
  } = questionsData[currentQuestion];

  const answers = [correctAnswer, ...incorrectAnswers].sort((a, b) =>
    a.localeCompare(b),
  );

  const onAnswer = (answer) => {
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
    setCurrentQuestion((currentQuestion) => currentQuestion + 1);
  };

  return (
    <>
      <section className={style.info}>
        <p className={style.number}>{`Question ${currentQuestion + 1}/10`}</p>
        <p className={style.text}>{`Category - ${category}`}</p>
        <p className={style.text}>{`Difficulty: ${difficulty}`}</p>
      </section>
      <section className={style.question}>{question}</section>
      <section className={style.answers}>
        <ul>
          {answers.map((answer) => (
            <li key={answer}>
              <button className={style.option} onClick={() => onAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

Question.propTypes = {
  questionsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Question;
