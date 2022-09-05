import React, { useState } from "react";

import FormRow from "../../components/FormRow";
import useLocalState from "../../utils/localState";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  BackgroundArea,
  FormAvatar,
  StyledFormArea,
  StyledFormButton,
  StyledTitle,
} from "../../components/FormStyles";
import { WebsiteRights } from "../../components/Footer/FooterElements";
import logo from "../../assets/phoenix_logo.png";
import { baseUrl } from "../../utils/url";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const params = useParams();
  const userId = params.id;
  console.log(userId);
  const [code, setCode] = useState("");
  const { alert, showAlert, loading, setLoading, success, setSuccess } =
    useLocalState();

  const handleChange = async (e) => {
    setCode(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!code) {
      showAlert({ text: "please enter your verification code" });
      setLoading(false);
      return;
    }
    try {
      const { data } = await axios.post(baseUrl + "auth/verify-email", {
        otp: code,
        userId,
      });
      console.log(data.msg);
      setLoading(false);
      setSuccess(true);
      showAlert({
        text: `Success, redirecting to login page shortly`,
        type: "success",
      });
      setTimeout(() => {
        navigate("/signin");
      }, 3000);
    } catch (error) {
      showAlert({ text: error.response.data.msg });
      setLoading(false);
    }
  };
  return (
    <BackgroundArea>
      {alert.show && (
        <div className={`alert alert-${alert.type}`}>{alert.text}</div>
      )}
      <StyledFormArea bg="white">
        <FormAvatar image={logo} wd={100} ht={100} />
        <StyledTitle size={18} mb="0">
          Verify Account
        </StyledTitle>
        <p className="w-80 text-left">
          As an added security mesure, please enter the 6-character code sent to
          your email to continue.
        </p>
        {!success && (
          <form
            className={loading ? "form form-loading" : "form"}
            onSubmit={handleSubmit}
          >
            {/* single form row */}
            <FormRow
              type="text"
              name="otp"
              value={code}
              handleChange={handleChange}
            />
            {/* end of single form row */}
            <StyledFormButton
              type="submit"
              className="btn btn-block"
              disabled={loading}
            >
              {loading ? "Please Wait..." : "New Password"}
            </StyledFormButton>
          </form>
        )}
      </StyledFormArea>

      <WebsiteRights style={{ marginTop: "25px" }}>
        PhoenixCap &copy; {new Date().getFullYear()} All rights reserved.
      </WebsiteRights>
    </BackgroundArea>
  );
};

export default VerifyOtp;
