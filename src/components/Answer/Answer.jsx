import * as React from 'react';
import PropTypes from 'prop-types';

import AnswerResult from '../AnswerResult/AnswerResult';
import Button from '../Button/Button';

function Answer({ answer, correctAnswer, checkAnswer }) {
  const [showResults, setShowResults] = React.useState(false);

  const onAnswer = (answer) => {
    setShowResults(true);
    checkAnswer(answer);
  };

  return (
    <Button handleClick={() => onAnswer(answer)}>
      {answer}
      <AnswerResult isCorrect={answer === correctAnswer} show={showResults} />
    </Button>
  );
}

Answer.propTypes = {
  answer: PropTypes.string.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  checkAnswer: PropTypes.func.isRequired,
};

export default Answer;
