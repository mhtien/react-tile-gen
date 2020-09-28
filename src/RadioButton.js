import React from 'react';

const RadioButton = ({
  className,
  type,
  value,
  children,
  checked,
  onChange,
}) => {
  return (
    <>
      <input
        className={className}
        type={type}
        name={className}
        id={value}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor="randomise">{children}</label>
    </>
  );
};

export default RadioButton;
