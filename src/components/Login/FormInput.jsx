import React from 'react';
import './LoginForm.css';

export default function FormInput({
  name,
  type,
  value,
  onChange,
  required = false,
}) {
  let result = name.replace(/\s/g, "");
  result = result[0].toLowerCase() + result.slice(1);

  return (
    <>
      <label className="cm-input-label" htmlFor={result}>{`${
        required ? name + "*" : name
      }`}</label>
      <input
        className="cm-input"
        name={result}
        type={type}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </>
  );
}
