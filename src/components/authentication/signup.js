import React from "react";
import { Link } from "react-router-dom";
import "../styles/signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <h2>Signup</h2>
      <form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
