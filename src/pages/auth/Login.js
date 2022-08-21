import { useSelector, useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";
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
import { TailSpin } from "react-loader-spinner";
import * as Yup from "yup";
import { TextInput } from "../../components/TextInput";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const ErrorMessagesSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(4, "Password Too Short")
    .max(50, "Password too Long")
    .required("Required"),
});

const Login = () => {
  const { user, isError, message, isSuccess } = useSelector(
    (store) => store.auth
  );

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isSuccess || user) {
      history.push("/");
    }
  }, [user, isError, isSuccess, message, history, dispatch]);
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
            dispatch(login(values));
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="email"
                type="email"
                label="Email Address"
                placeholder="info@gmail.com"
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
                {!isSubmitting && (
                  <StyledFormButton type="submit">Login</StyledFormButton>
                )}
                {isSubmitting && (
                  <TailSpin color="yellow" height={30} width={80} />
                )}
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
