import React from "react";
import styles from "./steps.module.scss"; // Asegúrate de que la ruta sea correcta
import { StepProps } from "./steps.type";
import { StepItem } from "./steps.type";
import errorIcon from '../../../assets/error.svg';
import finishedIcon from '../../../assets/finished3.svg';
import finishedWhite from '../../../assets/finishedWhite.svg'
import finishedGray from '../../../assets/finishedGray.svg'


const Step: React.FC<StepProps> = ({ steps, direction }) => {
    return (
      <div className={`${styles.step} ${styles[`step--${direction}`]}`}>
        {steps.map((step: StepItem, index: number) => (
          <div key={index} style={{
              display: 'flex',
              flexDirection: direction === "horizontal" ? "row" : "column",
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative', // Asegúrate de que el contenedor sea relativo
            }}>
            <div className={`${styles[`content--${direction}`]}`}>
              <div className={`${styles.circle} ${styles[`circle--${step.status}`]}`}>
                {/* Ajustar el src de la imagen según el status */}
                <img
                style={{ fill:"white" }}

                  src={
                    step.status === "error" ? errorIcon :
                    step.status === "finished" ? finishedWhite :
                    step.status === "waiting" ? finishedGray:
                    finishedIcon// Valor por defecto si no coincide con ningún estado
                  } 
                  alt="Step Icon" 
                />
              </div>
              <p className={`${styles.label} ${styles[`label--${step.status}`]}`}>{step.description}</p>
            </div>
            {index < steps.length - 1 && ( // Añadir la barra solo si no es el último paso
              <div className={`${styles[`bar--${direction}`]} ${step.status === "error" || step.status === "waiting" ? styles["bar--disabled"] : ""}`}></div>
            )}
          </div>
        ))}
      </div>
    );
};

export default Step;
