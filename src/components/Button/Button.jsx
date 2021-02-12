import * as React from 'react';
import PropTypes from 'prop-types';

function Button({ style, handleClick, children }) {
  return (
    <button className={style} onClick={handleClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  style: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
