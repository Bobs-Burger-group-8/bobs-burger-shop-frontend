/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Profile.css';

function ProfileFormInput({ name, value, onChange, required = false }) {
  let result = name.replace(/\s/g, "");
  result = result[0].toLowerCase() + result.slice(1);

  return (
    <div className='profile-input'>
      <label htmlFor={result} className="cm-input-label">
        { required ? `${ name }*` : name}
      </label>
      <input 
        className="cm-input" 
        name={ result }
        value={ value }
        onChange={ (e) => onChange(e) }
      />
    </div>
  );
}

export default ProfileFormInput;
