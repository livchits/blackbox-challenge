import * as React from 'react';

import AnswerResult from '../AnswerResult/AnswerResult';
import Button from '../Button/Button';

interface AnswerProps {
  answer: string;
  correctAnswer: string;
  checkAnswer: (answer: string) => void;
}

function Answer({ answer, correctAnswer, checkAnswer }: AnswerProps) {
  const [showResults, setShowResults] = React.useState(false);

  const onAnswer = (answer: string) => {
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

export default Answer;
