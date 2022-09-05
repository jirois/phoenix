import React from "react";

const VerifyCode = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-full">
      <form onsubmit="" className="content-area">
        <h4>Verify Code</h4>
        <h5>Welcome Back!</h5>
        <p>
          It looks like you're trying to login from a new device. As an added
          security mesure, please enter the 6-character code sent to your email.
        </p>
        <p>
          <a href="#">Need help?</a>
        </p>
        <fieldset className="number-code">
          <legend>Security Code</legend>
          <div>
            <input name="code" className="code-input" required />
            <input name="code" className="code-input" required />
            <input name="code" className="code-input" required />
            <input name="code" className="code-input" required />
            <input name="code" className="code-input" required />
            <input name="code" className="code-input" required />
          </div>
        </fieldset>
        <p>
          <a href="#">Resend Code</a>
        </p>
        <button type="submit">Confirm Code</button>
      </form>
    </div>
  );
};

export default VerifyCode;
