import React from "react";
import styles from "./steps.module.scss"; // Asegúrate de que la ruta sea correcta
import { StepProps } from "./steps.type";
import { StepItem } from "./steps.type";

const Step: React.FC<StepProps> = ({ steps, direction }) => {
    return (
      <div className={`${ styles.step + " "+ styles[`step--${direction}`]}`}>
        {steps.map((step: StepItem, index: number) => (
          <div key={index} style={{
              display: 'flex',
              flexDirection: direction === "horizontal" ? "row" : "column",
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative', // Asegúrate de que el contenedor sea relativo
            }}>
            <div className= {`${styles[`content--${direction}`]}`}>
              <div className={`${ styles.circle + " "+ styles[`circle--${step.status}`]}`}></div>
              <p className={`${ styles.label + " "+ styles[`label--${step.status}`]}`}>{step.description}</p>
            </div>
            {index < steps.length - 1 && ( // Añadir la barra solo si no es el último paso
              <div className= {`${styles[`bar--${direction}`]} ${step.status === "error" || step.status === "waiting" ? styles["bar--disabled"] : ""}
`}></div>
            )}
          </div>
        ))}
      </div>
    );
  };
  

export default Step;
