import React from "react";

import FormRow from "../../components/FormRow";

import { LoginWrapper, Form, Button, Paragraph, Links } from "./LoginElements";

const Login = () => {
  return (
    <LoginWrapper>
      <Form>
        <FormRow type="email" name="email" value={""} onChange={""} />
        <FormRow type="password" name="password" value={""} onChange={""} />
        <Button className="btn">Log In</Button>
        <Paragraph>
          Dont't have an account? <Links to="/register">Register</Links>
        </Paragraph>
        <Paragraph>
          Forgot your password?{" "}
          <Links to="/forgot-password">Reset Password</Links>
        </Paragraph>
      </Form>
    </LoginWrapper>
  );
};

export default Login;
