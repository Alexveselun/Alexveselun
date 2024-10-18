import React, { ChangeEventHandler, CSSProperties } from "react";
import "./Input.css";

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  style?: CSSProperties; // Use CSSProperties instead of CSSStyleDeclaration
  onChange: ChangeEventHandler<HTMLTextAreaElement>; // This is fine since it's a textarea
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ name, type, placeholder, style, onChange, required }) => {
  return (
    <div className="input-main">
        <textarea
          name={name}
          placeholder={placeholder}
          style={style} // Apply style directly
          onChange={onChange}
          required={required}
        />
        <label htmlFor={name}>{placeholder}</label> {/* Add htmlFor for accessibility */}
    </div>
  );
};

export default Input;
