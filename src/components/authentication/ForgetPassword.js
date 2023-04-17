import React from "react";
import "../styles/Forgetpassword.css";

function ForgotPassword() {
  return (
    <>
      <div className="forgot-box">
        <h1>FORGOT PASSWORD</h1>
        <form>
          <label>
            Email:
            <input type="email" />
          </label>
          <label>
            Enter New Password:
            <input type="password" />
          </label>
          <label>
            Confirm Password:
            <input type="password" />
          </label>
          <button type="submit">Submit</button>
        </form>
        <p className="para">
          Go To Login Page <a href="/Login">Log in</a>
        </p>
      </div>
    </>
  );
}
export default ForgotPassword;
