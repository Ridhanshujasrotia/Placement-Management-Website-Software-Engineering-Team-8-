import React, { useState } from "react";
import "../styles/CompanyProfile.css";

const CompanyProfile = () => {
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [industry, setIndustry] = useState("");
  const [founded, setFounded] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <div className="company-profile-container">
      <form onSubmit={handleSubmit}>
        <h2>Company Profile</h2>
        <label>
          Company Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Website:
          <input
            type="url"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            required
          />
        </label>
        <label>
          Industry:
          <input
            type="text"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            required
          />
        </label>
        <label>
          Founded:
          <input
            type="date"
            value={founded}
            onChange={(e) => setFounded(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CompanyProfile;
