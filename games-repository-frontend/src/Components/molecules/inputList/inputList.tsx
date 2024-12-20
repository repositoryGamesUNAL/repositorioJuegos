import React, { useState } from "react";
import Input from "../../atoms/input/input";
import Button from "../../atoms/button/button";
import styles from "./inputList.module.scss";
import { InputListProps } from "./inputList.type"; 
import { v4 as uuidv4 } from "uuid";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputList: React.FC<InputListProps> = ({
	placeholder = "Item",
	className,
	inputClassName,
	id,
	layout = "normal",
}) => {

	// Clases de los elementos
	const containerClasses = [
		styles.inputListContainer,
		className
	].filter(Boolean).join(' ');

	const inputClasses = [
		styles.input,
		inputClassName
	].filter(Boolean).join(' ');

	// Estado para los inputs	
	const [inputs, setInputs] = useState<{ id: string; value: string }[]>([
		{ id: uuidv4(), value: "" },
	]);

	// Función para agregar un nuevo input vacío
	const handleAddInput = () => {
		setInputs((prevInputs) => [...prevInputs, { id: uuidv4(), value: "" }]);
	};

	// Función para eliminar un input según su ID
	const handleRemoveInput = (id: string) => {
		setInputs((prevInputs) => prevInputs.filter((input) => input.id !== id));
	};

	// Función para actualizar el valor de un input
	const handleChangeInput = (id: string, value: string) => {
		setInputs((prevInputs) =>
			prevInputs.map((input) =>
				input.id === id ? { ...input, value } : input
			)
		);
	};

	return (
		<div id={id} className={containerClasses}>
		{inputs.map((input, index) => (
			<div key={input.id} className={styles.inputItem}>
			<Input
				containerClassName={styles.fatherInput}
				className={inputClasses}
				squeare={true}	
				type="textarea"
				placeholder={`${placeholder} ${index + 1}`}
				value={input.value}
				onChange={(e) => handleChangeInput(input.id	, e.target.value)}
			/>
			{index !== 0 && (
				<Button
					className={styles.deleteButton} 
					onClick={() => handleRemoveInput(input.id)}
					size="small"
					variant="icon"
				>
					<FontAwesomeIcon icon={faTrash}/>
				</Button>
			)}
			{index === 0 && (
				<Button
					id={styles.hide}
					className={styles.deleteButton}
					onClick={() => handleRemoveInput(input.id)}
					size="small"
					variant="icon"
					status="disabled"
				>
					ba
				</Button>
			)}
			</div>
		))}
			<div className={styles.buttonsContainer}>
				<Button 
					onClick={handleAddInput} 
					size="small"
				>
				Agregar
				</Button>
			</div>
		</div>
	);
};

export default InputList;