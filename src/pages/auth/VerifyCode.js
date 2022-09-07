import React, { useState } from "react";
import logo from "../../assets/phoenix_logo.png";
import { FiMail } from "react-icons/fi";
import { useSearchParams, useNavigate } from "react-router-dom";
import useLocalState from "../../utils/localState";
import axios from "axios";
import { baseUrl } from "../../utils/url";

const VerifyCode = () => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");
  const email = searchParams.get("email");
  const navigate = useNavigate();
  const { loading, setLoading, showAlert, alert, setSuccess, success } =
    useLocalState();
  const [code, setCode] = useState("");

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!code) {
      showAlert({ text: "Please enter your verification code" });
      setLoading(false);
    }
    setLoading(true);
    try {
      await axios.post(baseUrl + "auth/verify-email", {
        otp: code,
        userId,
      });
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

  const handleResendCode = async () => {
    try {
      await axios.post(baseUrl + "auth/resend-email", {
        userId,
        email,
      });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(userId);
  console.log(email);
  return (
    <div className=" mt-16">
      {alert.show && (
        <div className={`alert alert-${alert.type}`}>{alert.text}</div>
      )}
      {!success && (
        <form onSubmit={handleSubmit}>
          <div
            className="flex flex-col items-center justify-center min-h-full w-4/6 mx-auto md:w-2/6  "
            style={{
              boxShadow: "3px 2px 36px -11px rgba(163,150,150,0.75)",
              borderRadius: "12px",
            }}
          >
            <div className=" -mt-24">
              <img
                src={logo}
                alt="phoenix identity"
                className="h-44 w-44 block bg-transparent"
              />
            </div>
            <div className="py-4 text-center -mt-2">
              <h4 className="text-base text-bold mb-2 -mt-6">
                Enter confirmation code
              </h4>
              <span className="text-xs text-gray-500">
                for your phoenixcap account
              </span>
            </div>
            <div className=" md:h-24 md:w-24 ml-2 mt-6 ">
              <FiMail
                className=" text-center text-blue-800"
                style={{ fontSize: "5rem" }}
              />
            </div>
            <div>
              <p className="text-xs text-gray-700 text-center p-5 mx-3">
                {`Enter the code that was sent to ${email} within 5
            minutes.`}
              </p>
            </div>
            <div className="w-5/6 mb-3">
              <input
                text="text"
                name="otp"
                value={code}
                onChange={handleChange}
                placeholder="Enter the 6 digit code"
                className="focus:outline-blue-600"
                style={{
                  border: "1px solid #555",
                  width: "100%",
                  padding: "0.575rem 0.75rem",
                  borderRadius: "8px",
                }}
              />
            </div>
            <button
              className="w-5/6 text-bold  bg-blue-800  p-3 mb-1 rounded-lg text-white"
              disabled={loading}
            >
              {loading ? "Loading" : "Confirm"}
            </button>
            <p className="text-xs text-gray-700">
              Code expired?{" "}
              <button
                onClick={handleResendCode}
                className="text-blue-800 font-bold"
              >
                Email new code
              </button>
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

export default VerifyCode;
