import * as React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Checkmark } from '../../assets/checkmark.svg';
import { ReactComponent as IconX } from '../../assets/icon-X.svg';

import style from './AnswerResult.module.scss';

function AnswerResult({ isCorrect, show }) {
  const visibility = show ? 'show' : 'hidden';
  return isCorrect ? (
    <Checkmark className={style[visibility]} />
  ) : (
    <IconX className={style[visibility]} />
  );
}

AnswerResult.propTypes = {
  isCorrect: PropTypes.bool.isRequired,
  show: PropTypes.bool.isRequired,
};

export default AnswerResult;
