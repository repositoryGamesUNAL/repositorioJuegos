  import React from 'react';
  import { ButtonProps } from './button.type';

  import styles from './button.module.scss';

  const Button: React.FC<ButtonProps> = ({
    className, 
    id,
    size = 'medium',
    variant = 'main',
    status = 'default',
    children,
    onClick,
    type = "button",
  }) => {

    const buttonClasses = [
      styles.button,         // Clase base del botón
      styles[size],          // Clase dinámica basada en el tamaño
      styles[variant],       // Clase dinámica basada en el variante
      styles[status],        // Clase dinámica basada en el estado
      className,             // Clase adicional proporcionada por el usuario
    ]
      .filter(Boolean)        // Filtramos valores `undefined` o `null`
      .join(' ');             
    return (
      <button
        id={id}
        className={buttonClasses}
        onClick={onClick}
        disabled={status === 'disabled'}
        type={type}
      >
        {variant === 'link' ? <a href="#">{children}</a> : children}
      </button>
    );
  };

  export default Button;