import React from "react";
import "./TextField.css";

const TextField = (props) => {
  const {
    label,
    type,
    name,
    value,
    required,
    placeholder,
    error,
    helperText,
    onChange,
    onBlur,
    onIconClick = null,
    style,
    icon,
  } = props;

  const isIconClickable = typeof onIconClick === "function";

  return (
    <div style={style}>
      <div className="textFieldContainer">
        <div className="inputContainer">
          <div className={error ? "inputLabelError" : "inputLabel"}>
            {label}
            {required && "*"}
          </div>
          <input
            className="textInput"
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
          />
        </div>
        {icon && (
          <div
            className="inputIcon"
            style={isIconClickable ? { cursor: "pointer" } : {}}
            onClick={isIconClickable ? onIconClick : () => {}}
          >
            {icon}
          </div>
        )}
      </div>
      {error && <div className="helperText">{helperText}</div>}
    </div>
  );
};

export default TextField;
