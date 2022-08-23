import { Form, Formik } from "formik";
import React from "react";
import { FiMail } from "react-icons/fi";
// import { TailSpin } from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import { forgotPassword } from "../../features/auth/authSlice";

import {
  BackgroundArea,
  FormAvatar,
  StyleButtonGroup,
  StyledFormArea,
  StyledFormButton,
  StyledTitle,
} from "../../components/FormStyles";
import * as Yup from "yup";
import logo from "../../assets/phoenix_logo.png";
import { TextInput } from "../../components/TextInput";
import { WebsiteRights } from "../../components/Footer/FooterElements";
import { useEffect } from "react";
import useLocalState from "../../utils/localState";

const ErrorMessagesSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPassword = () => {
  const { isSuccess, isLoading, isError, user } = useSelector(
    (store) => store.auth
  );
  const dispatch = useDispatch();
  const { showAlert, alert } = useLocalState();
  useEffect(() => {
    if (isSuccess) {
      showAlert({ text: user.msg, type: "success" });
    }
    if (isError) {
      showAlert({ text: "Something went wrong, please try again" });
    }
  }, [isError, isSuccess]);
  return (
    <BackgroundArea>
      {alert.show && (
        <div className={`alert alert-${alert.type}`}>{alert.text}</div>
      )}
      <StyledFormArea bg="white">
        <FormAvatar image={logo} wd={100} ht={100} />
        <StyledTitle size={24} mb="14">
          Forgot password
        </StyledTitle>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={ErrorMessagesSchema}
          onSubmit={(values) => {
            console.log(values);
            dispatch(forgotPassword(values));
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

              <StyleButtonGroup>
                <StyledFormButton
                  className="btn"
                  wd={250}
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Please Wait.." : " Get Reset Password Link"}
                </StyledFormButton>
              </StyleButtonGroup>
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

export default ForgotPassword;
