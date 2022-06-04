import { Form, Formik } from "formik";
import { FiMail, FiLock } from "react-icons/fi";
import React from "react";
import {
  BackgroundArea,
  ExtraText,
  StyleButtonGroup,
  StyledFormArea,
  StyledFormButton,
  StyledSubTitle,
  StyledTitle,
  TextLink,
} from "../../components/FormStyles";
import * as Yup from "yup";
import { TextInput } from "../../components/TextInput";

const ErrorMessagesSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(4, "Password Too Short")
    .max(50, "Password too Long")
    .required("Required"),
});

const Login = () => {
  return (
    <BackgroundArea>
      <StyledFormArea bg="gray">
        <StyledTitle color="white" size={24} mb="14">
          Member login
        </StyledTitle>
        <StyledSubTitle>Login here now</StyledSubTitle>
        <Formik
          initialValues={{
            email: "",
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
                name="email"
                type="email"
                label="Email Address"
                placeholder="omas@omas.com"
                icon={<FiMail />}
              />
              <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="********"
                icon={<FiLock />}
              />
              <StyleButtonGroup>
                <StyledFormButton type="submit">Login</StyledFormButton>
              </StyleButtonGroup>
              <ExtraText>
                Don't have an account? <TextLink to="/signup">Sign Up</TextLink>
              </ExtraText>
              <ExtraText>
                Forgot password?{" "}
                <TextLink to="/forgot-password">Reset Password</TextLink>
              </ExtraText>
            </Form>
          )}
        </Formik>
      </StyledFormArea>
    </BackgroundArea>
  );
};

export default Login;
