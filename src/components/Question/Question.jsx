import * as React from 'react';

import Answers from '../Answers/Answers';
import QuestionData from '../QuestionData/QuestionData';

import style from './Question.module.scss';

function Question() {
  return (
    <main className={style.question}>
      <QuestionData />
      <Answers />
    </main>
  );
}

export default Question;
