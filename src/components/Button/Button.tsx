import * as React from 'react';

interface ButtonProps {
  style: string;
  handleClick: React.MouseEventHandler;
  children: React.ReactNode;
}

function Button({ style, handleClick, children }: ButtonProps) {
  return (
    <button className={style} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
