import React from "react";
import "../styles/AppForm.css";
const AppForm = ({ applicationForm, handleInputChange, handleApply }) => {
  return (
    <form onSubmit={handleApply}>
      <label htmlFor="name" className="labelform">
        Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={applicationForm.name}
        onChange={handleInputChange}
        required
      />
      <label htmlFor="email" className="labelform">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={applicationForm.email}
        onChange={handleInputChange}
        required
      />
      <label htmlFor="resume" className="labelform">
        Resume:
      </label>
      <input
        type="file"
        id="resume"
        name="resume"
        className="custom-file-input "
        value={applicationForm.resume}
        onChange={handleInputChange}
        required
      />
      <label htmlFor="cgpa" className="labelform">
        CGPA:
      </label>
      <input
        type="text"
        id="cgpa"
        name="cgpa"
        value={applicationForm.cgpa}
        onChange={handleInputChange}
        required
      />
      <label htmlFor="semester" className="labelform">
        Semester:
      </label>
      <input
        type="text"
        id="semester"
        name="semester"
        value={applicationForm.semester}
        onChange={handleInputChange}
        required
      />
      <label htmlFor="coverLetter" className="labelform">
        Cover Letter:
      </label>
      <textarea
        id="coverLetter"
        name="coverLetter"
        value={applicationForm.coverLetter}
        onChange={handleInputChange}
        rows={5}
        required
      ></textarea>
      <button type="submit" className="button1">
        Apply
      </button>
    </form>
  );
};

export default AppForm;
