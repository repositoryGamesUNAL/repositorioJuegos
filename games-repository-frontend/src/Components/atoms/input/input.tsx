import React, { useRef } from "react";
import { InputProps } from './input.type';
import styles from './input.module.scss'; // Importar estilos como módulo

const Input: React.FC<InputProps> = ({
	className,
	containerClassName,
	squeare = false,
	size = "normal",
	label,
	error,
	placeholder = "Text",
	disabled = false,
	type = "text",
	active = false,
	maxLength,
	onChange
}) => {
	// Crear referencias separadas para input y textarea
	const inputRef = useRef<HTMLInputElement>(null);
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	// Generar las clases dinámicamente
	const inputClasses = [
		styles.input,             
		styles[`input--${size}`],  
		error && styles['input--error'],     
		disabled && styles['input--disabled'],
		active && styles['input--active'], 
		type === "scroll" && styles['input-textarea--scroll'],
		squeare && styles['input--squeare'],
		className 
	]
		.filter(Boolean) // Elimina valores `undefined` o `false`
		.join(' '); // Une las clases en una cadena

	const containerClasses = [
		styles["input-container"],
		containerClassName
	].filter(Boolean).join(' ');

	return (
		<div className={containerClasses}>
		{/* Renderizado del label */}
		{label && <label className={styles["input-label"]}>{label}</label>}

		{/* Input de texto normal */}
		{type === "text" && (
			<input
			type="text"
			className={inputClasses}
			ref={inputRef} 
			placeholder={placeholder}
			disabled={disabled} 
			onChange={onChange}
			/>
		)}

		{/* Textarea */}
		{(type === "textarea" || type === "scroll") && (
			<textarea
			className={inputClasses}
			ref={textareaRef}
			placeholder={placeholder}
			disabled={disabled}
			maxLength={maxLength} 
			onChange={onChange}
			/>
		)}

		{/* Mensaje de error */}
		{error && <span className={styles["input-error"]}>{error}</span>}
		</div>
	);
};

export default Input;