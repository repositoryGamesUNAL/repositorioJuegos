import React from 'react';
import { useForm } from '../../hooks/useForm';
import styles from './GeneralStep.module.scss';
import { GeneralStepProps } from './GeneralStep.type';

const GeneralStep: React.FC<GeneralStepProps> = ({child}) => {
	const { state, dispatch } = useForm();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const form = new FormData(e.target as HTMLFormElement);
		const data = Object.fromEntries(form.entries()) as Record<string, string>;

		dispatch({ type: 'UPDATE_FORM_DATA', payload: data });
		dispatch({ type: 'NEXT_STEP' });
	};

	const handleChange = (inputs: string[]) => {
		console.log(inputs);
	};

	return (
		<div className={styles.step2Container}>
      		{React.cloneElement(child, { onChange: handleChange })}
		</div>
	);
};

export default GeneralStep;
