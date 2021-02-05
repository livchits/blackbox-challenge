import * as React from 'react';
import PropTypes from 'prop-types';

import Answers from '../Answers/Answers';
import QuestionData from '../QuestionData/QuestionData';

import style from './Question.module.scss';

function Question({ questionsData }) {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const { category, difficulty, question } = questionsData[currentQuestion];

  return (
    <main className={style.question}>
      <QuestionData
        category={category}
        difficulty={difficulty}
        number={currentQuestion + 1}
        question={question}
      />
      <Answers />
    </main>
  );
}

Question.propTypes = {
  questionsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Question;
