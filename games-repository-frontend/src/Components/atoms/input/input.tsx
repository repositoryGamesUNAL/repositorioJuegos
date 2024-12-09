import React, { useRef } from "react";
import '../input/input.scss';
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
}) => {
  // Crear referencias separadas para input y textarea
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const inputClassName = `
    input 
    ${size === "small" ? "input--small" : size === "big" ? "input--big" : "input--medium"} 
    ${error ? "input--error" : ""} 
    ${disabled ? "input--disabled" : ""}
    ${active ? "input--active" : ""}
  `;

  return (
    <div className="input-container">
      {/* Renderizado del label */}
      {label && <label className="input-label">{label}</label>}

      {/* Input de texto normal */}
      {type === "text" && (
        <input
          type="text"
          className={inputClassName}
          ref={inputRef} // Asignar la referencia del input
          placeholder={placeholder}
          disabled={disabled}
        />
      )}

      {/* Textarea */}
      {type === "text area" && (
        <textarea
          className={inputClassName}
          ref={textareaRef} // Asignar la referencia del textarea
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
        />
      )}

      {/* Input de tipo número */}
      {type === "number" && (
        <div className="input-number">
          <button className="input-number-btn" disabled={disabled}>
            -
          </button>
          <input
            type="number"
            className={inputClassName}
            ref={inputRef} // Asignar la referencia del input
            disabled={disabled}
            placeholder={placeholder}
          />
          <button className="input-number-btn" disabled={disabled}>
            +
          </button>
        </div>
      )}

      {/* Mensaje de error */}
      {error && <span className="input-error">{error}</span>}
    </div>
  );
};

export default Input;


