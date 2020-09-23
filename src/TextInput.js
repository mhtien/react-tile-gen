import React from 'react';

const TextInput = ({ children, type, value, name, onChange }) => {
  return (
    <>
      <label htmlFor={name}>{children}</label>
      <input
        name={name}
        id={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default TextInput;
