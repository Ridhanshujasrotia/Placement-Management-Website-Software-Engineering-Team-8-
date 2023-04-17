import "../styles/About.css";

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
          <img src="https://via.placeholder.com/400x300" alt="companyimage" />
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
    </div>
  );
}

export default About;
