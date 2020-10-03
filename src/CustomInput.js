import React from 'react';

const CustomInput = ({ children, type, value, name, onChange, max, step }) => {
  return (
    <>
      <label htmlFor={name}>{children}</label>
      <input
        name={name}
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        max={max}
        step={step}
      />
    </>
  );
};

export default CustomInput;
