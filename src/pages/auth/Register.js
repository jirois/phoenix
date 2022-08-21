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
import { TailSpin } from "react-loader-spinner";
import useLocalState from "../../utils/localState";

const ErrorMessagesSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(4, "Password Too Short")
    .max(50, "Password too Long")
    .required("Required"),
});

const Register = () => {
  const { isError, user, isSuccess, message } = useSelector(
    (store) => store.auth
  );
  console.log(user);
  const dispatch = useDispatch();
  const history = useHistory();
  const { showAlert, alert } = useLocalState();

  useEffect(() => {
    if (isSuccess) {
      history.push("/signin");
      showAlert({ text: user.msg, type: "success" });
    }
  }, [isSuccess, user, isError, message, history, showAlert]);
  return (
    <BackgroundArea>
      {alert.show && (
        <div className={`alert alert-${alert.type}`}>{alert.text}</div>
      )}
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
                <StyleButtonGroup>
                  {/* {!isSubmitting && (
                    <StyledFormButton type="submit">Sign Up</StyledFormButton>
                  )} */}

                  {isSubmitting ? (
                    <TailSpin color="yellow" height={30} width={80} />
                  ) : (
                    <StyledFormButton type="submit">Sign Up</StyledFormButton>
                  )}
                </StyleButtonGroup>
              </StyleButtonGroup>
              <ExtraText>
                Don't have an account? <TextLink to="/login">Log In</TextLink>
              </ExtraText>
              <ExtraText>
                Forgot Password? <TextLink to="/reset">Reset here</TextLink>
              </ExtraText>
            </Form>
          )}
        </Formik>
      </StyledFormArea>
    </BackgroundArea>
  );
};

export default Register;
