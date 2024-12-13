import React, { useRef } from "react";
import '../input/input.scss'; // Importar estilos
import { InputProps } from './input.type';

const Input: React.FC<InputProps> = ({
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

  const inputClassName = `
    input 
    input--${size} 
    ${error ? "input--error" : ""} 
    ${disabled ? "input--disabled" : ""} 
    ${active ? "input--active" : ""}
    ${type === "scroll" ? "input-textarea--scroll":""}
  `;

  return (
    <div className={"input-container"}>
      {/* Renderizado del label */}
      {label && <label className="input-label">{label}</label>}

      {/* Input de texto normal */}
      {type === "text" && (
        <input
          type="text"
          className={inputClassName}
          ref={inputRef} 
          placeholder={placeholder}
          disabled={disabled} 
          onChange={onChange}
        />
      )}

      {/* Textarea */}
      {(type === "textarea" || type === "scroll") && (
        <textarea
          className={inputClassName}
          ref={textareaRef}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength} 
          onChange={onChange}
        />
      )}

      {/* Mensaje de error */}
      {error && <span className="input-error">{error}</span>}
    </div>
  );
};

export default Input;
