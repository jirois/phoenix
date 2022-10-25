import { Form, Formik } from "formik";
import { FiMail, FiLock } from "react-icons/fi";
import React, { useEffect } from "react";
import { saveUser } from "../../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";
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
import * as Yup from "yup";
import { TextInput } from "../../components/TextInput";
import { useNavigate, useLocation } from "react-router-dom";

import logo from "../../assets/phoenix_logo.png";
import { WebsiteRights } from "../../components/Footer/FooterElements";
import useLocalState from "../../hooks/localState";

const ErrorMessagesSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(4, "Password Too Short")
    .max(50, "Password too Long")
    .required("Required"),
});

const Login = () => {
  // auth
  const { user } = useSelector((store) => store.user);
  console.log(user);
  const {
    isLoading: loading,
    user: loginUser,
    isSuccess,
    message,
  } = useSelector((store) => store.auth);
  console.log(loginUser);
  const dispatch = useDispatch();

  //localState
  const { showAlert, hideAlert } = useLocalState();

  // Redirect
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  useEffect(() => {
    if (user) {
      navigate(redirect);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, redirect]);

  return (
    <BackgroundArea>
      {alert.show && (
        <div className={`alert alert-${alert.type}`}>{alert.text}</div>
      )}
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
          onSubmit={async (values, { resetForm }) => {
            hideAlert();
            dispatch(login(values));
            if (isSuccess) {
              dispatch(saveUser(loginUser));
              showAlert({ type: true, text: `${message}` });
            }
            resetForm();
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
                  disabled={loading}
                >
                  {loading ? "Please Wait.." : " Log In"}
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
