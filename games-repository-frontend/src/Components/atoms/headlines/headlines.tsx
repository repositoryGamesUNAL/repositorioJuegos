import React from "react";

import {headlinesProps} from "./headline.type"
import "./headlines.model.scss"


export const Headlines: React.FC<headlinesProps> = ({ level, text }) => {
    // Mapeo de niveles a componentes de encabezado
    const Element: React.ElementType = level;
  
    return <Element className={`typography ${level}`}>{text}</Element>;
  };
  
 export default Headlines;