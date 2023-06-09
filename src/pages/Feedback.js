import React, { useState } from "react";
import "../styles/Feedback.css";
const Feedback = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    const mailtoLink = `mailto:ridhanshujasrotia14@gmail.com?subject=Feedback&body=${encodeURIComponent(
      feedback
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="container1">
      <h1 className="fade-in">Please Share Your Feedback With Us</h1>
      <form className="form-feed fade-in" onSubmit={handleSubmit}>
        <label htmlFor="feedback" className="labelfeed">
          Your Feedback:
        </label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows={5}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;
