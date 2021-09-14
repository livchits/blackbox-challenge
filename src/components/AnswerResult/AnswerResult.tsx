import * as React from 'react';

import { ReactComponent as Checkmark } from '../../assets/checkmark.svg';
import { ReactComponent as IconX } from '../../assets/icon-X.svg';

import style from './AnswerResult.module.scss';

interface AnswerResultProps {
  isCorrect: boolean;
  show: boolean;
}

function AnswerResult({ isCorrect, show }: AnswerResultProps) {
  const visibility = show ? 'show' : 'hidden';

  return isCorrect ? (
    <Checkmark className={style[visibility]} />
  ) : (
    <IconX className={style[visibility]} />
  );
}

export default AnswerResult;
