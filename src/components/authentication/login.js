import React from "react";
import "../styles/login.css";

function Login() {
  return (
    <div className="login-box">
      <h1>LOGIN</h1>
      <form>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <button type="submit">Log In</button>
      </form>
      <p className="para">
        <a href="/ForgetPassword">Forgot Password? </a>
      </p>
      <p className="para">
        Don't have an account? <a href="/Signup">Sign Up</a>
      </p>
    </div>
  );
}
export default Login;
