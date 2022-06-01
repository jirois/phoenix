import { Form, Formik } from "formik";
import { FiMail, FiLock } from "react-icons/fi";
import React from "react";
import {
  BackgroundArea,
  StyleButtonGroup,
  StyledFormArea,
  StyledFormButtonBig,
  StyledTitle,
} from "../../components/FormStyles";
import * as Yup from "yup";
import { TextInput } from "../../components/TextInput";

const ErrorMessagesSchema = Yup.object().shape({
  password: Yup.string()
    .min(4, "Password Too Short")
    .max(50, "Password too Long")
    .required("Required"),
});

const ResetPassword = () => {
  return (
    <BackgroundArea>
      <StyledFormArea bg="gray">
        <StyledTitle color="white" size={24} mb="0">
          Reset Password
        </StyledTitle>
        <Formik
          initialValues={{
            password: "",
          }}
          validationSchema={ErrorMessagesSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form>
              <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="********"
                icon={<FiLock />}
              />
              <StyleButtonGroup>
                <StyledFormButtonBig type="submit">
                  Reset Password
                </StyledFormButtonBig>
              </StyleButtonGroup>
            </Form>
          )}
        </Formik>
      </StyledFormArea>
    </BackgroundArea>
  );
};

export default ResetPassword;
