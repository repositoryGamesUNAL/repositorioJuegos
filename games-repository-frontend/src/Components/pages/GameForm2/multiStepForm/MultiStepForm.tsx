import React from 'react';
import { useForm } from '../hooks/useForm';
import styles from './multiStepForm.module.scss';
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';
import Step3 from './Step3';
import ControlButtons from './ControlButtons/ControlButtons';

const MultiStepForm: React.FC = () => {
	const { state } = useForm();

	const steps = [
		<Step1 key="step1" />,
		<Step2 key="step2" />,
		<Step3 key="step3" />,
	];

	return (
		<>
			<div className={styles.mask}>
				{steps[state.currentStep]}
			</div>
			<ControlButtons />
		</>
	);
};

export default MultiStepForm;
