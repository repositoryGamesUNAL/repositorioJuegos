export type TogglerProps = {
    isOn: boolean; // Estado del toggler: encendido o apagado
    disabled?: boolean; // Si el toggler está deshabilitado
    withLabel?: boolean; // Si muestra etiquetas (On/Off)
    onToggle?: (newState: boolean) => void; // Función para manejar el cambio de estado
  };
  