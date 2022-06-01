import { Form, Formik } from "formik";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import React from "react";
import {
  BackgroundArea,
  ExtraText,
  StyleButtonGroup,
  StyledFormAreaSignup,
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
  name: Yup.string().min(5, "Name too short").required("Required"),
  repeatPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password")], "Password must match"),
});

const Signup = () => {
  return (
    <BackgroundArea>
      <StyledFormAreaSignup bg="gray">
        <StyledTitle color="white" size={24} mb="0">
          Member SignUp
        </StyledTitle>
        <StyledSubTitle>Sign up here</StyledSubTitle>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            repeatPassword: "",
          }}
          validationSchema={ErrorMessagesSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form>
              <TextInput
                name="namw"
                type="text"
                label="Full Name"
                placeholder="Omas Omas"
                icon={<FiUser />}
              />
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
              <TextInput
                name="repeatPassword"
                type="password"
                label="Repeat Password"
                placeholder="********"
                icon={<FiLock />}
              />
              <StyleButtonGroup>
                <StyledFormButton type="submit">Sign Up</StyledFormButton>
              </StyleButtonGroup>
              <ExtraText>
                Already have an account?{" "}
                <TextLink to="/signin">Log In</TextLink>
              </ExtraText>
            </Form>
          )}
        </Formik>
      </StyledFormAreaSignup>
    </BackgroundArea>
  );
};

export default Signup;
