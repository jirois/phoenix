import React, { useState } from "react";
import { useField } from "formik";
import { FiEye, FiEyeOff } from "react-icons/fi";
import {
  StyledFormInput,
  StyledLabel,
  StyledIcon,
  ErrorMsg,
  FieldContainer,
} from "./FormStyles";

export const TextInput = ({ icon, ...props }) => {
  const [field, meta] = useField(props);
  const [show, setShow] = useState(false);

  return (
    <FieldContainer>
      <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>
      {props.type !== "password" && <StyledFormInput {...field} {...props} />}
      {props.type === "password" && (
        <StyledFormInput
          {...field}
          {...props}
          type={show ? "text" : "password"}
        />
      )}
      <StyledIcon>{icon}</StyledIcon>

      {props.type === "password" && (
        <StyledIcon onClick={() => setShow(!show)} right>
          {show && <FiEye />}
          {!show && <FiEyeOff />}
        </StyledIcon>
      )}

      {meta.touched && meta.error ? (
        <ErrorMsg>{meta.error}</ErrorMsg>
      ) : (
        <ErrorMsg style={{ visibility: "hidden" }}></ErrorMsg>
      )}
    </FieldContainer>
  );
};
