import React from "react";

import {
  FormRowContainer,
  FormRowLabel,
  FormRowInput,
} from "./FormRowElements";

const FormRow = ({ type, name, value, handleChange }) => {
  return (
    <FormRowContainer>
      <FormRowLabel htmlFor={name}>{name}</FormRowLabel>
      <FormRowInput
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
      />
    </FormRowContainer>
  );
};

export default FormRow;
