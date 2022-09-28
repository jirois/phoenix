import axios from "axios";
import { baseUrl } from "../../utils/url";
import { Form, Formik } from "formik";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
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
import { useNavigate } from "react-router-dom";
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

const Signup = () => {
  const { showAlert, alert, setLoading, loading, hideAlert } = useLocalState();
  const navigate = useNavigate();

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
          onSubmit={async (
            values,
            { setFieldError, setSubmitting, resetForm }
          ) => {
            hideAlert();
            setLoading(true);
            console.log(setSubmitting(true));
            try {
              const { data } = await axios.post(
                baseUrl + "auth/register",
                values
              );
              resetForm();
              console.log(data.data.userId);
              navigate(
                `/verifyCode?userId=${data.data.userId}&email=${data.data.email}`
              );
            } catch (error) {
              const { msg } = error.response.data;

              showAlert({ text: msg || "there was an error " });
            }
            setLoading(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="name"
                type="name"
                label="Name"
                placeholder="John Doe"
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
                  disabled={loading}
                >
                  {loading ? "Please Wait.." : " Sign Up"}
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

export default Signup;
