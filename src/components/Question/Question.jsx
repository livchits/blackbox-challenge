import * as React from 'react';
import PropTypes from 'prop-types';

import Answers from '../Answers/Answers';
import QuestionData from '../QuestionData/QuestionData';

function Question({ questionsData }) {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const { category, difficulty, question } = questionsData[currentQuestion];

  return (
    <>
      <QuestionData
        category={category}
        difficulty={difficulty}
        number={currentQuestion + 1}
        question={question}
      />
      <Answers />
    </>
  );
}

Question.propTypes = {
  questionsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Question;
