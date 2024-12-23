import React from 'react';
import { useForm } from '../../hooks/useForm';
import Button from '../../../../atoms/button/button';
import styles from './ControlButtons.module.scss'; // Importamos el SCSS específico de este componente

const ControlButtons: React.FC = () => {
	const { state, dispatch } = useForm();

	const isLastStep = state.currentStep === 5;
	const isFirstStep = state.currentStep === 0;

	const handlePrevious = () => {
		dispatch({ type: 'PREV_STEP' });
	};

	const handleNext = () => {
		if (!isLastStep) {
			dispatch({ type: 'NEXT_STEP' });
		} else {
			console.log('Formulario finalizado');
		}
	};

	return (
		<div className={styles.controlButtons}>
			<Button
				onClick={handlePrevious}
				status={isFirstStep ? 'disabled' : 'default'}
				className={styles.button}
			>
				Atrás
			</Button>
			<Button
				onClick={handleNext}
				variant="main"
				className={styles.button}
			>
				{isLastStep ? 'Finalizar' : 'Adelante'}
			</Button>
		</div>
	);
};

export default ControlButtons;
