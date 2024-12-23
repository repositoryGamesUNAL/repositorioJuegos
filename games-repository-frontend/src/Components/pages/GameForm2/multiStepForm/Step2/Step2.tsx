import React from 'react';
import { useForm } from '../../hooks/useForm';
import InputList from '../../../../molecules/inputList/inputList';
import styles from './Step2.module.scss';

const Step2: React.FC = () => {
	const { state, dispatch } = useForm();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const form = new FormData(e.target as HTMLFormElement);
		const data = Object.fromEntries(form.entries()) as Record<string, string>;

		dispatch({ type: 'UPDATE_FORM_DATA', payload: data });
		dispatch({ type: 'NEXT_STEP' });
	};


	return (
		<div className={styles.step2Container}>
			<InputList
				placeholder='Concepto Fundamental'
				title='Conceptos Fundamentales'
				description='Escribe los conceptos fundamentales que se deben aprender en el desarrollo del juego'
			/>
		</div>
	);
};

export default Step2;
