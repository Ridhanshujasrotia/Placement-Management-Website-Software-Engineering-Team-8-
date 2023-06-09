import React, { useState } from "react";
import "../styles/ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const body = `Name: ${name}                 Email: ${email}                 Message: ${message}`;
    const mailtoUrl = `mailto:ridhanshujasrotia14@gmail.com?subject=Contact%20Form%20Submission%20:${name}&body=${body}`;
    window.location.href = mailtoUrl;
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <section>
      <div className="container-Contact">
        <div className="contactinfo">
          <div>
            <h2>Contact Us</h2>
            <ul className="info">
              <li>
                <span>
                  <img
                    src="https://www.clipartmax.com/png/middle/121-1214856_pro-locator-free-location-icon-vector.png"
                    alt="Location"
                  />
                </span>
                <span>
                  Clement Town <br />
                  Dehradun <br />
                  India
                </span>
              </li>
              <li>
                <span>
                  <img
                    src="https://p7.hiclipart.com/preview/663/97/225/email-computer-icons-message-bounce-address-email-icon.jpg"
                    alt="Email"
                  />
                </span>
                <span>info@placement.com</span>
              </li>
              <li>
                <span>
                  <img
                    src="https://www.pinclipart.com/picdir/middle/210-2108807_tete-mobile-svg-png-icon-free-download-phone.png"
                    alt="Phone"
                  />
                </span>
                <span>01234567890</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="contactusform">
          <h2>Send Us A Message</h2>
          <div className="formBox">
            <div className="inputBox w50">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <span>Full Name</span>
            </div>

            <div className="inputBox w50">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <span>Email Address</span>
            </div>
            <div className="inputBox w100">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <span>Please enter a message</span>
            </div>
            <div className="inputBox w50">
              <input type="submit" value="Send" onClick={handleFormSubmit} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
