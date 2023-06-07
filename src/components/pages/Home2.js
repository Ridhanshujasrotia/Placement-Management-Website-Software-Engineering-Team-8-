import React from "react";
import "../styles/Home2.css";
import { useAuth0 } from "@auth0/auth0-react";

const Home2 = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <div className="section1 animated fadeIn">
        <p>
          We help connect talented students with top companies through our
          placement management website. Our platform offers personalized career
          guidance, expert coaching, and support to help you land your dream
          job.
          <br></br>
          <br></br> We also provide a range of services such as resume building,
          interview preparation, company research, and career counseling to
          ensure you are fully equipped for the job search process.
        </p>
        <div className="section1-image right">
          <img
            src="https://dme.ac.in/wp-content/uploads/2021/06/placement-3.png"
            alt="Placement Management"
          />
        </div>
      </div>
      <div className="section2 animated fadeIn">
        <h3>Our Services</h3>
        <ul>
          <li className="circle">Resume Building</li>
          <li className="circle">Interview Preparation</li>
          <li className="circle">Company Research</li>
          <li className="circle">Career Counseling</li>
        </ul>
      </div>
      <div className="section4 animated fadeIn">
        <h3>Why Choose Us</h3>
        <ul>
          <li className="square">Personalized Career Guidance</li>
          <li className="square">Expert Coaching & Support</li>
          <li className="square">Access to Top Companies</li>
          <li className="square">Proven Track Record of Success</li>
        </ul>
      </div>
      <button className="demo-login-button" onClick={() => loginWithRedirect()}>
        Login To See More
      </button>
    </div>
  );
};

export default Home2;
