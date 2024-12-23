import React from "react";
import { TogglerProps } from "./toggle.type"; // Importa los tipos de las propiedades del componente Toggler
import "./toggle.model.scss"; // Importa el archivo de estilos SCSS

// Definición del componente funcional Toggler, que acepta las propiedades definidas en TogglerProps
const Toggler: React.FC<TogglerProps> = ({
  isOn, // Estado del interruptor (encendido o apagado)
  disabled = false, // Propiedad que indica si el interruptor está deshabilitado (por defecto es false)
  withLabel = false, // Propiedad que indica si el interruptor debe mostrar las etiquetas "On" y "Off"
  onToggle = () => {}, // Función que se ejecuta cuando el interruptor cambia de estado, por defecto es una función vacía
}) => {

  // Función que maneja el cambio de estado del interruptor
  const handleToggle = () => {
    if (!disabled) { // Solo cambia el estado si el interruptor no está deshabilitado
      onToggle(!isOn); // Llama a la función onToggle pasando el valor opuesto de isOn
    }
  };

  // Construcción de las clases condicionales para el contenedor del interruptor
  const togglerClass = `toggler ${isOn ? "toggler--on" : "toggler--off"} ${withLabel ? "with-label" : ""}`;

  // Construcción de las clases condicionales para el slider del interruptor
  const sliderClass = `toggler__slider ${withLabel ? "toggler__slider--with-label" : ""} ${
    disabled ? "toggler__slider--disabled" : ""
  } ${disabled && withLabel ? "toggler__slider--with-label--disabled" : ""}`;

  // Función que genera las clases condicionales para las etiquetas de "On" y "Off"
  const labelClass = (side: "left" | "right") =>
    `toggler__label toggler__label--${side} ${disabled ? `toggler__label--${side}--disabled` : ""}`;

  return (
    // Contenedor principal del interruptor
    <div
      className={togglerClass} // Asigna las clases construidas anteriormente
      onClick={handleToggle} // Maneja el evento de clic para cambiar el estado
      role="switch" // Define el rol como interruptor para accesibilidad
      aria-checked={isOn} // Define el estado de activación para accesibilidad
      aria-disabled={disabled} // Define si está deshabilitado para accesibilidad
    >
      {/* Contenedor del slider */}
      <div className={sliderClass}>
        {withLabel && ( // Solo muestra las etiquetas si withLabel es verdadero
          <>
            {/* Etiqueta para el lado izquierdo (On) */}
            <span className={labelClass("left")}>{isOn ? "On" : ""}</span>
            {/* Etiqueta para el lado derecho (Off) */}
            <span className={labelClass("right")}>{!isOn ? "Off" : ""}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Toggler; // Exporta el componente Toggler
