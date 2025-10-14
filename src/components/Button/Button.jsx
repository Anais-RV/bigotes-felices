import React from 'react';
import './Button.css';
import { preprocessCSS } from 'vite';

const Button = ({
  onClick, 
  className = '', 
  id, 
  name,
  type = 'button', 
  disabled = false, 
  children,
  ariaLabel,
  ariaPressed,
  ...preprocessCSS
}) => {

  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
      id={id}
      name={name}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}>
      {...props}
      {children}

    </button>
  );
};

export default Button;