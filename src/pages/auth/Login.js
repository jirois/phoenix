import { useSelector, useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";
import { Form, Formik } from "formik";
import { FiMail, FiLock } from "react-icons/fi";
import React from "react";
import {
  BackgroundArea,
  ExtraText,
  FormAvatar,
  StyleButtonGroup,
  StyledFormArea,
  StyledFormButton,
  StyledSubTitle,
  StyledTitle,
  TextLink,
} from "../../components/FormStyles";
// import { TailSpin } from "react-loader-spinner";
import * as Yup from "yup";
import { TextInput } from "../../components/TextInput";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import logo from "../../assets/phoenix_logo.png";
import { WebsiteRights } from "../../components/Footer/FooterElements";

const ErrorMessagesSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(4, "Password Too Short")
    .max(50, "Password too Long")
    .required("Required"),
});

const Login = () => {
  const { user, isError, message, isSuccess, isLoading } = useSelector(
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
      <StyledFormArea bg="white">
        <FormAvatar image={logo} wd={100} ht={100} />
        <StyledTitle size={24} mb="14">
          Member login
        </StyledTitle>
        <StyledSubTitle color="gray">proceed to login</StyledSubTitle>
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
                <StyledFormButton
                  className="btn"
                  wd={250}
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Please Wait.." : " Log In"}
                </StyledFormButton>
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
      <WebsiteRights style={{ marginTop: "25px" }}>
        PhoenixCap &copy; {new Date().getFullYear()} All rights reserved.
      </WebsiteRights>
    </BackgroundArea>
  );
};

export default Login;
