import * as React from 'react';

import byAlphabeticalOrder from '../../utils/byAlphabeticalOrder';
import Answer from '../Answer/Answer';
import { Question } from '../../types';

import style from './Question.module.scss';

interface QuestionProps {
  questionsData: Question[];
  addPoints: (newPoints: number) => void;
  setIsPlaying: (isPlaying: boolean) => void;
}

function Question({ questionsData, addPoints, setIsPlaying }: QuestionProps) {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  const {
    category,
    difficulty,
    question,
    correct_answer,
    incorrect_answers,
    type,
  } = questionsData[currentQuestion];

  const answers = [correct_answer, ...incorrect_answers].sort(
    byAlphabeticalOrder,
  );

  const checkAnswer = (answer: string) => {
    if (answer === correct_answer) {
      switch (type) {
        case 'multiple':
          addPoints(10);
          break;

        case 'boolean':
          addPoints(5);
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
                correctAnswer={correct_answer}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Question;
