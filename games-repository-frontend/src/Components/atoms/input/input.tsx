import React, { forwardRef } from "react";
import "../input/input.scss"; // Importar estilos
import { InputProps } from "./input.type";

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(({
  size = "normal",
  label,
  error,
  placeholder = "Text",
  disabled = false,
  type = "text",
  maxLength,
  onChange,
  value,
  name,
}, ref) => {
  const inputClassName = `
    input 
    input--${size} 
    ${error ? "input--error" : ""} 
    ${disabled ? "input--disabled" : ""} 
    ${type === "scroll" ? "input-textarea--scroll" : ""}
  `;

  const normalizedValue = typeof value === "number" ? value.toString() : value; // Convertir números a cadena

  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}

      {type === "text" && (
        <input
          type="text"
          className={inputClassName}
          ref={ref as React.Ref<HTMLInputElement>}
          placeholder={placeholder}
          disabled={disabled}
          value={normalizedValue} // Usar el valor normalizado
          onChange={onChange}
          name={name}
        />
      )}

      {(type === "textarea" || type === "scroll") && (
        <textarea
          className={inputClassName}
          ref={ref as React.Ref<HTMLTextAreaElement>}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          value={normalizedValue} // Usar el valor normalizado
          onChange={onChange}
          name={name}
        />
      )}

      {error && <span className="input-error">{error}</span>}
    </div>
  );
});

export default Input;
