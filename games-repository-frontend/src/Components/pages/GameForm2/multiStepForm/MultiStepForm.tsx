import React from 'react';
import { useForm } from '../hooks/useForm';
import styles from './multiStepForm.module.scss';
import Step1 from './Step1/Step1';
import GeneralStep from './GeneralStep/GeneralStep';
import ControlButtons from './ControlButtons/ControlButtons';
import InputList from '../../../molecules/inputList';

const MultiStepForm: React.FC = () => {
	const { state } = useForm();

	const steps = [
		<Step1 key="step1" />,
		<GeneralStep 
			key={1}
			param={'fundamentalConcepts'}
			child={<InputList
			placeholder='Concepto Fundamental'
			title='Conceptos Fundamentales'
			description='Escribe los conceptos fundamentales que se deben aprender en el desarrollo del juego'
			/>} 
		/>,
		<GeneralStep
			key={2}
			param={'instructionalObjectives'}
			child={
			<InputList
				placeholder='Objetivo Instruccional'
				title='Objetivos Instruccionales'
				description='Escribe los objetivos instruccionales que se deben aprender en el desarrollo del juego'
			/>} 
		/>,
		<GeneralStep
			key={3}
			param='rules'
			child={
			<InputList
				placeholder='Regla'
				title='Reglas'
				description='Escribe las reglas que hay en el juego'
			/>}	
		/>,
		<GeneralStep 
			key={4}
			param='purposes'
			child={
			<InputList
				placeholder='Proposito'
				title='Propositos'
				description='Escribe los propositos que se deben aprender en el desarrollo del juego'
			/>}
		/>,	
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
