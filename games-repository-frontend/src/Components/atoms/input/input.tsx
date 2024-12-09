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
}) => {
  // Crear referencias separadas para input y textarea
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const inputClassName = `
    input 
    ${size === "small" ? "input--small" : size === "fixed" ? "input-textarea--fixed" : "input--medium"} 
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
      {type === "textarea" && (
        <textarea
          className={inputClassName}
          ref={textareaRef} // Asignar la referencia del textarea
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
        />
      )}

      {/* Input de tipo número */}
      
      {/* Mensaje de error */}
      {error && <span className="input-error">{error}</span>}
    </div>
  );
};

export default Input;


