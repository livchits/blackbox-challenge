import * as React from 'react';
import PropTypes from 'prop-types';

import style from './QuestionData.module.scss';

function QuestionData({ category, difficulty, number, question }) {
  return (
    <>
      <section className={style.info}>
        <p className={style.number}>{`Question ${number}/10`}</p>
        <p className={style.text}>{`Category - ${category}`}</p>
        <p className={style.text}>{`Difficulty: ${difficulty}`}</p>
      </section>
      <section className={style.question}>{question}</section>
    </>
  );
}

QuestionData.propTypes = {
  category: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
};

export default QuestionData;
