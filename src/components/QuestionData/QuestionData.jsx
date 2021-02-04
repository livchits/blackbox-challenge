import * as React from 'react';

import style from './QuestionData.module.scss';

function QuestionData() {
  return (
    <>
      <section className={style.info}>
        <p className={style.number}>Question 1/10</p>
        <p className={style.text}>Category - Entertainment Television</p>
        <p className={style.text}>Difficulty: hard</p>
      </section>
      <section className={style.question}>
        What type of dog is &#039;Handsome Dan&#039;, the mascot of Yale
        University?
      </section>
    </>
  );
}

export default QuestionData;
