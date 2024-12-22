import React from "react";
import { headlinesProps } from "./headline.type";
import styles from "./headlines.module.scss";


export const Headlines: React.FC<headlinesProps> = ({ level = 'h1', text ,classNames }) => {
  // Mapeo de niveles a componentes de encabezado
  const Element: React.ElementType = level; // Si no se pasa el nivel, usa 'h1' por defecto

  return (
    <Element className={`${styles.typography} ${styles[level]} ${classNames}`}>
      {text}
    </Element>
  );
};

export default Headlines;
