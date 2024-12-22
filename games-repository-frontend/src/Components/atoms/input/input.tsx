import React, { forwardRef } from "react";
import { InputProps } from './input.type';
import styles from './input.module.scss'; // Importar estilos como módulo

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
	(
		{
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
		onChange,
		value,
		},
		ref // Recibe la referencia pasada como prop
	) => {
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

		const normalizedValue = typeof value === "number" ? value.toString() : value;

		return (
		<div className={containerClasses}>
			{/* Renderizado del label */}
			{label && <label className={styles["input-label"]}>{label}</label>}

			{/* Input de texto normal */}
			{type === "text" && (
			<input
				type="text"
				className={inputClasses}
				ref={ref as React.Ref<HTMLInputElement>} 
				placeholder={placeholder}
				disabled={disabled} 
				value={normalizedValue}
				onChange={onChange}
			/>
			)}

			{/* Textarea */}
			{(type === "textarea" || type === "scroll") && (
			<textarea
				className={inputClasses}
				ref={ref as React.Ref<HTMLTextAreaElement>}
				placeholder={placeholder}
				disabled={disabled}
				maxLength={maxLength} 
				value={normalizedValue}
				onChange={onChange}
			/>
			)}

			{/* Mensaje de error */}
			{error && <span className={styles["input-error"]}>{error}</span>}
		</div>
		);
	}
);

Input.displayName = "Input";

export default Input;