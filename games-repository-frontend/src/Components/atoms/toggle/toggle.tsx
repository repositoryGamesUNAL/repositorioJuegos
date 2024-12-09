import React from "react";
import { TogglerProps } from "./toggle.type";
import "./toggle.model.scss";

const Toggler: React.FC<TogglerProps> = ({
  isOn,
  disabled = false,
  withLabel = false,
  onToggle = () => {},
}) => {
  const handleToggle = () => {
    if (!disabled) {
      onToggle(!isOn);
    }
  };

  return (
    <div
      className={`toggler ${isOn ? "toggler--on" : "toggler--off"} ${withLabel?"with-label":""}`}
      onClick={handleToggle}
      role="switch"
      aria-checked={isOn}
      aria-disabled={disabled}
    >
      <div
        className={`toggler__slider ${withLabel ? "toggler__slider--with-label" : ""} ${disabled &&withLabel? 
            "toggler__slider--with-label--disabled":""} ${disabled ? "toggler__slider--disabled":""}`}
      >
        {withLabel && (
          <>
            <span className={`toggler__label toggler__label--left ${disabled?"toggler__label toggler__label--left--disabled":""}`}>
              {isOn ? "On" : ""}
            </span>
            <span className={`toggler__label toggler__label--right ${disabled?"toggler__label toggler__label--right--disabled":""}`}>
              {!isOn ? "Off" : ""}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Toggler;
