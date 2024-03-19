import React from 'react';
import './Profile.css';

export default function ProfileFormInput({
  name,
  value,
  onChange,
  required = false,
}) {
  let result = name.replace(/\s/g, "");
  result = result[0].toLowerCase() + result.slice(1);

  /* -- IF we want to add profile images
  if (name.toLowerCase() === "profile image") {
    return (
      <div>
        <label className="cm-input-label" htmlFor={result}>
          {required ? name + "*" : name}
        </label>
        <img src={value} alt="Profile Image" style={{ maxWidth: "100px" }} /> 
      </div>
    );
  }
  */

  return (
    <>
      <label className="cm-input-label" htmlFor={result}>{`${
        required ? name + "*" : name
      }`}</label>
      <input
        className="cm-input"
        name={result}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </>
  );
}
