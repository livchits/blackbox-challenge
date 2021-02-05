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
        In the Nintendo DS game &#039;Ghost Trick: Phantom Detective&#039;, what
        is the name of the hitman seen at the start of the game?
      </section>
    </>
  );
}

export default QuestionData;
