import * as React from 'react';
import PropTypes from 'prop-types';

import style from './Card.module.scss';

function Card({ children }) {
  return (
    <div className={style.container}>
      <main className={style.card}>{children}</main>;
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
