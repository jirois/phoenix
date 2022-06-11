import { useSelector, useDispatch } from "react-redux";
import { register } from "../../features/userslice/authSlice";
import { Form, Formik } from "formik";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import React, { useEffect } from "react";
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
import { useHistory } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

const ErrorMessagesSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(4, "Password Too Short")
    .max(50, "Password too Long")
    .required("Required"),
});

const Register = () => {
  const { isError, user, isSuccess } = useSelector((store) => store.auth);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isSuccess || user) {
      history.push("/signin");
    }
  }, [isSuccess, user, isError, history, dispatch]);
  return (
    <BackgroundArea>
      <StyledFormArea bg="gray">
        <StyledTitle color="white" size={24} mb="14">
          Register Now
        </StyledTitle>
        <StyledSubTitle>Sign up</StyledSubTitle>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={ErrorMessagesSchema}
          onSubmit={(values) => {
            console.log(values);
            dispatch(register(values));
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="name"
                type="name"
                label="Name"
                placeholder="omas@omas.com"
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
              <StyleButtonGroup>
                <StyleButtonGroup>
                  {!isSubmitting && (
                    <StyledFormButton type="submit">Sign Up</StyledFormButton>
                  )}
                  {isSubmitting && (
                    <TailSpin color="yellow" height={30} width={80} />
                  )}
                </StyleButtonGroup>
              </StyleButtonGroup>
              <ExtraText>
                Don't have an account? <TextLink to="/login">Log In</TextLink>
              </ExtraText>
            </Form>
          )}
        </Formik>
      </StyledFormArea>
    </BackgroundArea>
  );
};

export default Register;
