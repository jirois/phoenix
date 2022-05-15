import React from "react";

import FormRow from "../../components/FormRow";

import {
  RegisterWrapper,
  Form,
  Button,
  Paragraph,
  Links,
} from "./RegisterElements";

const Register = () => {
  return (
    <RegisterWrapper>
      <Form>
        <FormRow type="name" name="name" value={""} onChange={""} />
        <FormRow type="email" name="email" value={""} onChange={""} />
        <FormRow type="password" name="password" value={""} onChange={""} />
        <Button className="btn">Sign Up</Button>
        <Paragraph>
          Already a have an account?
          <Links to="/signin" className="login-link">
            Log In
          </Links>
        </Paragraph>
      </Form>
    </RegisterWrapper>
  );
};

export default Register;
