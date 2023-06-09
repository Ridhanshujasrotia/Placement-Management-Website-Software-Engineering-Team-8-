import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-row">
        <div className="footer-column">
          <div className="footer-contact">
            <div className="footer-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="footer-text">
              <a href="mailto:ridhanshujasrotia14@gmail.com">
                ridhanshujasrotia14@gmail.com
              </a>
            </div>
          </div>
          <div className="footer-contact">
            <div className="footer-icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="footer-text">
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="footer-social">
            <a href="https://www.facebook.com/placementmanagement">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.twitter.com/placementmanagement">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/placementmanagement">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            We are a leading provider of placement services for job seekers and
            employers alike.
          </p>
        </div>
      </div>
      <div className="footer-animation">
        <div className="footer-animation-content">
          <h2>Join Our Team Today!</h2>
          <p>
            Apply now to become part of the Placement Management team and help
            connect job seekers with their dream jobs.
          </p>
          <button className="footer-btn">Apply Now</button>
        </div>
      </div>
      <div className="footer-row">
        <div className="footer-column">
          <p>&copy; 2023 Placement Management. All rights reserved.</p>
        </div>
        <div className="footer-column">
          <ul className="footer-links">
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Terms of Service</a>
            </li>
            <li>
              <a href="/">Site Map</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
