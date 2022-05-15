import React from "react";

import FormRow from "../../components/FormRow";

import { ResetWrapper, Form, Button } from "./ResetElements";

const ResetPassword = () => {
  return (
    <ResetWrapper>
      <Form>
        <FormRow type="password" name="password" value={""} onChange={""} />
        <Button className="btn">Reset Password</Button>
      </Form>
    </ResetWrapper>
  );
};

export default ResetPassword;
