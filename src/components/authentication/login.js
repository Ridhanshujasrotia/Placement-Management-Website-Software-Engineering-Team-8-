import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
};

export default Login;
