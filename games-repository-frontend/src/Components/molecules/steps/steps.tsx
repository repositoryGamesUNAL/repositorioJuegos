import React from "react";
import styles from "./steps.module.scss";
import { StepProps } from "./steps.type";
import { StepItem } from "./steps.type";





const Step: React.FC<StepProps> = ({ steps, direction }) => {
  return (
    <div className={`${styles.step} ${styles[direction]}`}>
      {steps.map((step, index) => (
        <div
          key={index}
          className={`${styles.stepItem} ${styles[step.status]}`}
        >
        <div className={styles.icons}>
          <div className={`${styles.step} ${styles[direction]}`}>
            {step.status === "finished" && <span>✔️</span>}
            {step.status === "process" && <span>⏳</span>}
            {step.status === "error" && <span>❌</span>}
            {step.status === "waiting" && <span>⚪</span>}
          </div>
          </div>
          <p className={styles.description}>{step.description}</p>
          {index < steps.length - 1 && <div className={styles.separator}></div>}
        </div>
      ))}
    </div>
  );
};

export default Step;
