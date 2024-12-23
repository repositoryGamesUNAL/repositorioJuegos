import React from 'react';
import { useForm } from '../../hooks/useForm';
import styles from './step1.module.scss';
import Input from '../../../../atoms/input/input';
import InputList from '../../../../molecules/inputList/inputList';

const Step1: React.FC = () => {
  	const { state, dispatch } = useForm();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const form = new FormData(e.target as HTMLFormElement);
		const data = Object.fromEntries(form.entries()) as Record<string, string>;

		dispatch({ type: 'UPDATE_FORM_DATA', payload: data });
		dispatch({ type: 'NEXT_STEP' });
	};

	return (
		<div className={styles.step1Container}>
			<Input
				containerClassName={styles.inputFather}
				className={styles.inputChild}
				type="text"
				label='Nombre'
				placeholder="Title"
				squeare={true}
			/>

			<Input
				containerClassName={styles.inputFather}
				className={styles.inputChild}
				type="textarea"
				label='Descripcion'
				placeholder="Description"
				squeare={true}
			/>

			<InputList
				layout='column'
				placeholder='Material'
				title='Materiales'
			/>

			<div>
				<Input
					type="text"
					label='Genero'
					placeholder="Title"
					squeare={true}
				/>
				<Input
					type="text"
					label='Tiempo'
					placeholder="Title"
					squeare={true}
				/>
				<Input
					type="text"
					label='Nivel'
					placeholder="Title"
					squeare={true}
				/>
			</div>
			<Input
				containerClassName={styles.inputFather}
				className={styles.inputChild}
				type="text"
				label='Criterio Ganador'
				placeholder="Title"
				squeare={true}
			/>

			<form onSubmit={handleSubmit}>
				<button type="submit">Next</button>
			</form>
		</div>
	);
};

export default Step1;