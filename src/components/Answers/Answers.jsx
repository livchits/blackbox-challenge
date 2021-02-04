import * as React from 'react';

import style from './Answers.module.scss';

function Answers() {
  return (
    <section className={style.answers}>
      <ul>
        <li>
          <button className={style.option}>Bulldog</button>
        </li>
        <li>
          <button className={style.option}>Yorkshire Terrier</button>
        </li>
        <li>
          <button className={style.option}>Boxer</button>
        </li>
        <li>
          <button className={style.option}>Pug</button>
        </li>
      </ul>
    </section>
  );
}

export default Answers;
