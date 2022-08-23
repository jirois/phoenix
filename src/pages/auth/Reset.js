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
import { useSelector, useDispatch } from "react-redux";
import { resetPassword } from "../../features/auth/authSlice";
import { useLocation, useHistory } from "react-router-dom";
import { useEffect } from "react";
import useLocalState from "../../utils/localState";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const ErrorMessagesSchema = Yup.object().shape({
  password: Yup.string()
    .min(4, "Password Too Short")
    .max(50, "Password too Long")
    .required("Required"),
});

const ResetPassword = () => {
  const { isLoading, isError, isSuccess } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const query = useQuery();
  const history = useHistory();
  const { showAlert, alert } = useLocalState();

  useEffect(() => {
    if (isSuccess) {
      history.push("/signin");
    }

    if (isError) {
      showAlert({ text: "check your credentials" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, history, isError]);

  return (
    <BackgroundArea>
      {alert.show && (
        <div className={`alert alert-${alert.type}`}>{alert.text}</div>
      )}
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
            dispatch(
              resetPassword({
                values,
                token: query.get("token"),
                email: query.get("email"),
              })
            );
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
                <StyledFormButtonBig
                  className="btn"
                  wd={250}
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Please Wait.." : " Reset Password"}
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
