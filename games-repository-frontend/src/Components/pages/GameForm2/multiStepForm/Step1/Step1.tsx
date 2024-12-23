import React from 'react';
import { useForm } from '../../hooks/useForm';
import styles from './step1.module.scss';
import Input from '../../../../atoms/input';
import InputList from '../../../../molecules/inputList';
import Headlines from '../../../../atoms/headlines';

const Step1: React.FC = () => {
  	const { state, dispatch } = useForm();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const form = new FormData(e.target as HTMLFormElement);
		const data = Object.fromEntries(form.entries()) as Record<string, string>;

		dispatch({ type: 'UPDATE_FORM_DATA', payload: data });
		dispatch({ type: 'NEXT_STEP' });
	};

	const descriptionStyle=[
		styles.inputChild,
		styles['inputChild--description']
	  ].join(' ');

	const columnInputs=[
		styles.inputFather,
		styles['inputFather--column']
	].join(' ');
	
	const columChildInputs=[
		styles.inputChild,
		styles['inputChild--column']
	].join(' ');

	const inputTeam=[
		styles.inputChild,
		styles['inputChild--numeric']
	].join(' ');

	const inputFatherInput=[
		styles.inputFather,
		styles['inputFather--numeric']
	].join(' ');

	return (
		<div className={styles.step1Container}>
			<Input
				containerClassName={styles.inputFather}
				className={styles.inputChild}
				type="text"
				label='Nombre'
				placeholder="Nombre del juego"
				squeare={true}
			/>

			<Input
				containerClassName={styles.inputFather}
				className={descriptionStyle}
				type="textarea"
				label='Descripcion'
				placeholder="Descricion del juego"
				squeare={true}
			/>

			<InputList
				layout='column'
				placeholder='Material'
				title='Materiales'
			/>

			<div className={styles.horizontalInput}>
				<Input
					type="text"
					label='Genero'
					placeholder="Title"
                    squeare={true}
                    className={columChildInputs}
                    containerClassName={columnInputs}
				/>
				<Input
					type="text"
					label='Tiempo'
					placeholder="Minutos.."
                    squeare={true}
                    className={columChildInputs}
                    containerClassName={columnInputs}
				/>
				<Input
					type="text"
					label='Nivel'
					placeholder="Alto, Medio, Bajo"
                    squeare={true}
                    className={columChildInputs}
                    containerClassName={columnInputs}
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
			<Headlines level={"h4"} text='Equipos' classNames={styles.equipoh4}/>
			<div className={styles.horizontalInput}>
				<Input
					containerClassName={inputFatherInput}
					className={inputTeam}
					type="number"
					label="Min"
					placeholder="0"
					squeare={true}
				/>
				<Input
					containerClassName={inputFatherInput}
					className={inputTeam}
					type="number"
					label="Max"
					placeholder="0"
					squeare={true}
				/>
			</div>
		</div>
	);
};

export default Step1;