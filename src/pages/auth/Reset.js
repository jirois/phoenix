import { Form, Formik } from "formik";
import { FiLock } from "react-icons/fi";
import React from "react";
import {
  BackgroundArea,
  FormAvatar,
  StyleButtonGroup,
  StyledFormArea,
  StyledFormButtonBig,
  StyledTitle,
} from "../../components/FormStyles";
import * as Yup from "yup";
import { TextInput } from "../../components/TextInput";
import logo from "../../assets/phoenix_logo.png";
import { WebsiteRights } from "../../components/Footer/FooterElements";

const ErrorMessagesSchema = Yup.object().shape({
  password: Yup.string()
    .min(4, "Password Too Short")
    .max(50, "Password too Long")
    .required("Required"),
});

const ResetPassword = () => {
  return (
    <BackgroundArea>
      <StyledFormArea bg="white">
        <FormAvatar image={logo} wd={100} ht={100} />
        <StyledTitle size={24} mb="0">
          Reset Password
        </StyledTitle>
        <Formik
          initialValues={{
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
                name="password"
                type="password"
                label="Password"
                placeholder="********"
                icon={<FiLock />}
              />
              <StyleButtonGroup>
                <StyledFormButtonBig type="submit">
                  Reset Password
                </StyledFormButtonBig>
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

export default ResetPassword;
