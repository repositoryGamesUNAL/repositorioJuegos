import React from "react";

import { headlinesProps } from "./headline.type";
import styles from "./headlines.module.scss";

export const Headlines: React.FC<headlinesProps> = ({ level, text }) => {
  // Mapeo de niveles a componentes de encabezado
  const Element: React.ElementType = level;

  return (
    <Element className={`${styles.typography} ${styles[level]}`}>
      {text}
    </Element>
  );
};

export default Headlines;
