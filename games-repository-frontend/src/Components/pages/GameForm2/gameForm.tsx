import React from 'react';
import { FormProvider } from './context/FormContext/FormContext';
import MultiStepForm from './multiStepForm/MultiStepForm';
import styles from './gameForm.module.scss'
import Headlines from '../../atoms/headlines/headlines';

const GameForm: React.FC = () => {
    return (
        <FormProvider>
            <div className={styles.container}>
                <Headlines level="h3" text="Crea un Juego" />
                <MultiStepForm/>
            </div>
        </FormProvider>
    )
};

export default GameForm;