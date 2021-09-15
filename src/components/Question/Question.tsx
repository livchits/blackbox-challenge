import * as React from 'react';

import byAlphabeticalOrder from '../../utils/byAlphabeticalOrder';
import Answer from '../Answer/Answer';
import { ParsedQuestion } from '../../types';

import style from './Question.module.scss';

type CalculatePoints = (points: number) => number;

interface QuestionProps {
  questionsData: ParsedQuestion[];
  setPoints: (calculatePoints: CalculatePoints) => void;
  setIsPlaying: (isPlaying: boolean) => void;
}

function Question({ questionsData, setPoints, setIsPlaying }: QuestionProps) {
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

  const checkAnswer = (answer: string) => {
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
      <section className={style.question}>{question}</section>
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

export default Question;