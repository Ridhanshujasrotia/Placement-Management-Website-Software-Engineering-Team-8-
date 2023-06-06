import "../styles/About.css";
import ContactRidhanshu from "./developer";
import { ContactRahulRana } from "./developer";
import { ContactRiya } from "./developer";
import { ContactRahuKumar } from "./developer";

function About() {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>About Us</h1>
      </div>
      <div className="about-us-content">
        <div className="about-us-text">
          <h2>Our Company</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            augue et lacus auctor varius. Etiam rhoncus velit nec magna
            lobortis, vel tristique augue laoreet.{" "}
          </p>
          <p>
            Suspendisse in leo in mauris pharetra tempus. In commodo felis nec
            ligula commodo, a molestie dolor facilisis. Sed vel diam purus.
            Donec ac lacus libero. Sed lacinia ultrices massa eget vulputate.
            Sed sodales consequat nulla, quis placerat ipsum hendrerit sed.{" "}
          </p>
        </div>
        <div className="about-us-image">
          <img
            src="https://www.aipsglobal.com/page_imgs/placement.jpg"
            alt="companyimage"
          />
        </div>
      </div>
      <div className="about-us-animation">
        <div className="about-us-animation-content">
          <h2>Our Process</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            augue et lacus auctor varius. Etiam rhoncus velit nec magna
            lobortis, vel tristique augue laoreet.{" "}
          </p>
          <p>
            Suspendisse in leo in mauris pharetra tempus. In commodo felis nec
            ligula commodo, a molestie dolor facilisis. Sed vel diam purus.
            Donec ac lacus libero. Sed lacinia ultrices massa eget vulputate.
            Sed sodales consequat nulla, quis placerat ipsum hendrerit sed.{" "}
          </p>
          <button className="about-us-animation-btn">Learn More</button>
        </div>
      </div>
      <div className="about-us-team">
        <h2>Meet Our Team</h2>
        <div className="about-us-team-members">
          <div className="about-us-team-member">
            <div className="about-us-team-member-img">
              <img
                src="https://bitmoji.com/render/panel/1458a558-c5a5-4c38-a5ba-3cccf3b97cfe-906be587-9d9c-4c1d-b0ec-742047c9d9de-v1.png?transparent=1&palette=1"
                alt="bitmoji1"
              />
            </div>
            <div className="about-us-team-member-info">
              <h3>Ridhanshu Jasrotia</h3>
              <p>Project Manager</p>
              <ContactRidhanshu />
            </div>
          </div>
          <div className="about-us-team-member">
            <div className="about-us-team-member-img">
              <img
                src="https://bitmoji.com/render/panel/1458a558-c5a5-4c38-a5ba-3cccf3b97cfe-06a391dd-8b61-47b5-afdc-757576ce56d8-v1.png?transparent=1&palette=1"
                alt="bitmoji2"
              />
            </div>
            <div className="about-us-team-member-info">
              <h3>Rahul Rana</h3>
              <p>Lead Designer</p>
              <ContactRahulRana />
            </div>
          </div>
          <div className="about-us-team-member">
            <div className="about-us-team-member-img">
              <img
                src="https://bitmoji.com/render/panel/1458a558-c5a5-4c38-a5ba-3cccf3b97cfe-7c0fa1a9-c7a4-4dd4-9447-937480b8bb19-v1.png?transparent=1&palette=1"
                alt="bitmoji3"
              />
            </div>
            <div className="about-us-team-member-info">
              <h3>Riya Sharma</h3>
              <p>Lead Developer</p>
              <ContactRiya />
            </div>
          </div>
          <div className="about-us-team-member">
            <div className="about-us-team-member-img">
              <img
                src="https://bitmoji.com/render/panel/1458a558-c5a5-4c38-a5ba-3cccf3b97cfe-84f6c52e-253f-49aa-9db2-d1ef29e35b23-v1.png?transparent=1&palette=1"
                alt="bitmoji4"
              />
            </div>
            <div className="about-us-team-member-info">
              <h3>Rahul Kumar</h3>
              <p>Lead Marketing</p>
              <ContactRahuKumar />
            </div>
          </div>
        </div>
      </div>
      <div className="about-us-future-goals">
        <h2>Our Future Goals</h2>
        <ul>
          <li>
            Expand our network of partner companies to offer more job
            opportunities to our users
          </li>
          <li>
            Implement more advanced search and filtering options to help users
            find the best job matches for their skills and preferences
          </li>
          <li>
            Introduce features to help users prepare for job interviews, such as
            practice interview questions and tips for answering common interview
            questions
          </li>
          <li>
            Offer personalized career counseling and advice to help users
            navigate their career paths
          </li>
          <li>
            Continuously gather feedback from users and incorporate it into our
            platform to improve the user experience and meet their needs
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
