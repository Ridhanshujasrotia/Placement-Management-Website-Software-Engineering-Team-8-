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
    <div className="container">
      <h1 className="fade-in">Feedback Page</h1>
      <form className="fade-in" onSubmit={handleSubmit}>
        <label htmlFor="feedback">Your Feedback:</label>
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
