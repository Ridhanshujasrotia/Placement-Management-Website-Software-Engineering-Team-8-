import "../styles/Home.css";

function Home() {
  // const images = require.context("../images", false, /\.(png|jpe?g|svg)$/);

  // // map over the array to create a card for each company image
  // const imageCards = images.keys().map((image, index) => (
  //   <div className="image-card" key={index}>
  //     <img src={images(image).default} alt="Img" />
  //   </div>
  // ));
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
            src="https://via.placeholder.com/400x300"
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

      <div className="section3 animated fadeIn">
        <h3>Our Partners Companies</h3>
        <br></br>
        <br></br>
        <div className="section7 animated fadeIn">
          {/* <div className="company-grid">{imageCards}</div> */}
        </div>
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

      <div className="section5 animated fadeIn">
        <h3>Our Team</h3>
        <ul>
          <li className="circle-2">
            Ridhanshu Jasrotia <br></br> Project Manager
          </li>
          <li className="circle-2">
            Rahul Rana <br></br> Career Coach
          </li>
          <li className="circle-2">
            Riya Sharma <br></br> Resume Specialist
          </li>
          <li className="circle-2">
            Rahul Kumar <br></br> Interview Coach
          </li>
        </ul>
      </div>

      <div className="section6 animated fadeIn">
        <h3>FAQ</h3>
        <ul>
          <li>How do I sign up for your services?</li>
          <p className="answer">
            You can sign up for our services by filling out the registration
            form on our website or contacting us directly via phone or email.
          </p>
          <li>What is the cost of your services?</li>
          <p className="answer">
            Our services are priced based on your specific needs and the amount
            of support you require. Please contact us for a quote.
          </p>
          <li>How long does it take to find a job through your website?</li>
          <p className="answer">
            The length of time it takes to find a job through our website varies
            depending on a number of factors, including your experience level,
            the types of jobs you're interested in, andany current job market
            conditions. However, we work diligently to match you with the best
            possible job opportunities and help you through the application and
            interview process, so you can find a job as quickly as possible.
          </p>
          <li>Do you offer any guarantees?</li>
          <p className="answer">
            We do not offer any guarantees, as finding a job ultimately depends
            on a variety of factors that are outside of our control. However, we
            are committed to providing you with the best possible guidance and
            support throughout your job search to help increase your chances of
            success.
          </p>
        </ul>
      </div>
    </div>
  );
}

export default Home;
