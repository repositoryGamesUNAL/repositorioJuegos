import React, {	useState, useEffect } from "react";
import Input from "../../atoms/input";
import Button from "../../atoms/button";
import Headlines from "../../atoms/headlines";
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
	value = [],
	layout = "normal",	
	onChange,
	title,
	description
}) => {
	// Estado para los inputs	
	const [inputs, setInputs] = useState(
		value.length > 0 
		  ? value.map((item) => ({ id: uuidv4(), value: item }))
		  : [{ id: uuidv4(), value: "" }]
	);
	
	// Clases de los elementos
	const containerInputClasses = [
		styles.inputListContainer,
		className
	].filter(Boolean).join(' ');

	const inputClasses = [
		styles.input,
		layout === "column" && styles["input--column"],
		inputClassName
	].filter(Boolean).join(' ');

	const inputItem = [
		styles.inputItem,
		layout === "column" && styles["inputItem--column"],
	].filter(Boolean).join(' ');	

	const columnDiv = [
		layout === "column" && styles.column
	].filter(Boolean).join(' ');

	const fatherInput = [
		styles.fatherInput,
		layout === "column" && styles["fatherInput--column"],
	].filter(Boolean).join(' ');

	// Función para agregar un nuevo input vacío
	const handleAddInput = () => {
		setInputs((prevInputs) => [...prevInputs, { id: uuidv4(), value: "" }]);
	};

	// Función para eliminar un input según su ID
	const handleRemoveInput = (id: string) => {
		setInputs((prevInputs) => prevInputs.filter((input) => input.id !== id));
	};

	const handleChangeInput = (id: string, value: string) => {
		// Actualiza el valor del input correspondiente
		setInputs((prevInputs) =>
		  prevInputs.map((input) =>
			input.id === id ? { ...input, value } : input
		  )
		);
	}
	  
	useEffect(() => {
		if (onChange) {
			onChange(inputs.map((input) => input.value));
		}
	},[inputs])


	return (
		<div id={id} className={containerInputClasses}>
			{title && <Headlines level="h4" text={title} classNames={styles.title}/>}
			{description && <p className={styles.description}>{description}</p>}
			<div className={columnDiv}>
			{inputs.map((input, index) => (
				<div key={input.id} className={inputItem}>
					<Input
						containerClassName={fatherInput}
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
			</div>
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
