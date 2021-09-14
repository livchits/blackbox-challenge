import * as React from 'react';

import style from './Card.module.scss';

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.container}>
      <main className={style.card}>{children}</main>;
    </div>
  );
}

export default Card;
