import React, { useState } from "react";
import "../styles/StudentProfile.css";

const StudentProfile = () => {
  const [name, setName] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [branch, setBranch] = useState("");
  const [section, setSection] = useState("");
  const [batch, setBatch] = useState("");
  const [resume, setResume] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <div className="profile-container">
      <h2>Student Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Mobile:
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </label>
        <label>
          CGPA:
          <input
            type="number"
            step="0.01"
            min="0"
            max="10"
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            required
          />
        </label>
        <label>
          Branch:
          <input
            type="text"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            required
          />
        </label>
        <label>
          Section:
          <input
            type="text"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            required
          />
        </label>
        <label>
          Pass Out Batch:
          <input
            type="number"
            min="1900"
            max="2099"
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
            required
          />
        </label>
        <label>
          Resume:
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setResume(e.target.files[0])}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentProfile;
