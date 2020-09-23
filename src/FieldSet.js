import React from 'react';

const FieldSet = ({ className, children, title }) => {
  return (
    <fieldset className={className}>
      <legend>{title}</legend>
      {children}
    </fieldset>
  );
};

export default FieldSet;
