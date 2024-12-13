  import React from 'react';
  import { ButtonProps } from './button.type';

  import styles from './button.module.scss';

  const Button: React.FC<ButtonProps> = ({
    className, 
    size = 'medium',
    variant = 'main',
    status = 'default',
    children,
    onClick,
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

      console.log(variant);
    return (
      <button
        className={buttonClasses}
        onClick={onClick}
        disabled={status === 'disabled'}
      >
        {variant === 'link' ? <a href="#">{children}</a> : children}
      </button>
    );
  };

  export default Button;