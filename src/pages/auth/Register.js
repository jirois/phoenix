import { useSelector, useDispatch } from "react-redux";
import { register } from "../../features/auth/authSlice";
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
// import { TailSpin } from "react-loader-spinner";
import useLocalState from "../../utils/localState";
import { WebsiteRights } from "../../components/Footer/FooterElements";

const ErrorMessagesSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(4, "Password Too Short")
    .max(50, "Password too Long")
    .required("Required"),
});

const Register = () => {
  const { isError, user, isSuccess, message, isLoading } = useSelector(
    (store) => store.auth
  );
  console.log(user);
  const dispatch = useDispatch();
  const history = useHistory();
  const { showAlert, alert } = useLocalState();

  useEffect(() => {
    if (isSuccess) {
      history.push("/success-page");
    }
    if (isError) {
      showAlert({ text: message });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, user, isError, message, history]);
  return (
    <BackgroundArea>
      {alert.show && (
        <div className={`alert alert-${alert.type}`}>{alert.text}</div>
      )}
      <StyledFormArea bg="white">
        <StyledTitle size={24} mb="14">
          Register Now
        </StyledTitle>
        <StyledSubTitle color="gray">
          Begin your trading journey today
        </StyledSubTitle>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={ErrorMessagesSchema}
          onSubmit={(values, { setFieldError, setSubmitting }) => {
            console.log(values);
            dispatch(register(values, setFieldError, setSubmitting));
            if (isError) {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="name"
                type="name"
                label="Name"
                placeholder="info@info.com"
                icon={<FiUser />}
              />
              <TextInput
                name="email"
                type="email"
                label="Email Address"
                placeholder="info@info.com"
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
                  {isLoading ? "Please Wait.." : " Sign Up"}
                </StyledFormButton>
              </StyleButtonGroup>
              <ExtraText>
                Don't have an account? <TextLink to="/signin">Log In</TextLink>
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

export default Register;
