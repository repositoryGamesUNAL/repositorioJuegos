import React from 'react';
import { ButtonProps } from './button.type';

import './button.model.scss';

const Button: React.FC<ButtonProps> = ({
  className, 
  size = 'medium',
  variant = 'main',
  status = 'default',
  children,
  onClick,
}) => {
  return (
    <button
      className={`button ${size} ${variant} ${status} ${className || ''}`}
      onClick={onClick}
      disabled={status === 'disabled'}
    >
      {variant === 'link' ? <a href="#">{children}</a> : children}
    </button>
  );
};

export default Button;