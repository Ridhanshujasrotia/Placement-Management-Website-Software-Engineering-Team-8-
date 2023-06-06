import React from "react";
import "../styles/signup.css";

function Signup() {
  return (
    <div className="Sign-box">
      <h1>Sign Up</h1>
      <form>
        <label>
          First Name:
          <input type="text" />
        </label>
        <label>
          Last Name:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <label>
          Confirm Password:
          <input type="password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <p className="para">
        Already have an account? <a href="/Login">Log in</a>
      </p>
    </div>
  );
}

export default Signup;
