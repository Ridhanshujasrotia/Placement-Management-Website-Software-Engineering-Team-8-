import React, { useRef, useState } from "react";
import "../styles/SearchJob.css";

const SearchJob = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Software Engineer",
      description: `We are looking for a skilled software engineer with expertise in developing software applications and systems. 
                    The ideal candidate will have strong programming skills in languages such as Java, Python, C++, or JavaScript.
                    They should also have experience with software development frameworks and libraries, such as Spring (Java), Django(Python), or React(JavaScript).
                    Proficiency in database technologies, such as MySQL, MongoDB, or PostgreSQL, for data storage and retrieval is required.
                    Familiarity with version control systems like Git for collaborative development and code management is essential.
                    Knowledge of software development methodologies like Agile or Scrum for efficient project management is a plus.\n\n
                    Skills: \n - Strong programming skills in languages such as Java, Python, C++, or JavaScript.\n 
                    - Experience with software development frameworks and libraries, such as Spring (Java), Django(Python), or React(JavaScript).\n 
                    - Proficiency in database technologies, such as MySQL, MongoDB, or PostgreSQL, for data storage and retrieval.\n 
                    - Familiarity with version control systems like Git for collaborative development and code management.\n 
                    - Knowledge of software development methodologies like Agile or Scrum for efficient project management.
                    \n\nRelevant Technologies and Packages: 
                    \nJava: Spring Boot, Hibernate, Maven, JUnit
                    \nPython: Django, Flask, NumPy, Pandas, pytest
                    \nJavaScript: React, Angular, Node.js, Express.js, Mocha, Chai
                    \nDatabase: MySQL, MongoDB, PostgreSQL, SQLite
                    \nVersion Control: Git, GitHub, Bitbucket`,
      company: "Amazon",
      Companylogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtlKaoyfhxZqTlhA6ttA6MEErDiVoaRg3K5g&usqp=CAU",
    },

    {
      id: 2,
      title: "Data Analyst Intern",
      description: `Job Requirements:
                    Exciting internship opportunity for a data analyst to gain practical experience in analyzing and interpreting data.
                    Skills:
                    Proficiency in data analysis tools such as Microsoft Excel or Google Sheets for data manipulation and analysis.
                    Strong SQL skills for querying databases and extracting relevant data.
                    Familiarity with statistical analysis techniques, including hypothesis testing, regression analysis, or clustering algorithms.
                    Experience with data visualization tools such as Tableau, Power BI, or matplotlib for creating insightful visualizations.
                    Relevant Technologies and Packages:
                    Excel: PivotTables, Formulas, VBA
                    SQL: MySQL, PostgreSQL, SQLite
                    Statistical Analysis: R, Python (NumPy, Pandas, SciPy), Excel Data Analysis ToolPak
                    Data Visualization: Tableau, Power BI, matplotlib, seaborn`,
      company: "Google",
      Companylogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTtRWWQ17eylGBBBhcXNmc3P2x0bYaDrkG0w&usqp=CAU",
    },
    {
      id: 3,
      title: "Graphic Designer",
      description: `Job Requirements:
                    Join the creative team as a graphic designer to create visually appealing designs.
                    Skills:
                    Proficiency in graphic design software such as Adobe Photoshop, Illustrator, or InDesign.
                    Knowledge of typography, color theory, and composition principles for creating visually appealing designs.
                    Experience with prototyping tools like Adobe XD or Sketch for creating interactive design mockups.
                    Familiarity with web design technologies like HTML and CSS for creating web-based designs.
                    Relevant Technologies and Packages:
                    Graphic Design: Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Sketch
                    Prototyping: Adobe XD, Sketch, Figma
                    Web Design: HTML, CSS, Bootstrap, Adobe Dreamweaver`,
      company: "Graphic Era University",
      Companylogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoCoxEt6tv5lVA8apxlHy3fM5bJTBm-YL-xQ&usqp=CAU",
    },
    {
      id: 4,
      title: "Financial Analyst",
      description: `Job Requirements:
                    Hiring a financial analyst to provide insights and analysis on financial data.
                    Skills:
                    Strong analytical skills with proficiency in financial modeling and forecasting.
                    Knowledge of financial analysis techniques such as ratio analysis, discounted cash flow (DCF) analysis, or scenario analysis.
                    Proficiency in financial software and tools such as Excel, Bloomberg, or MATLAB for data analysis and modeling.
                    Familiarity with financial databases and research platforms like Capital IQ or FactSet.
                    Relevant Technologies and Packages:
                    Financial Analysis: Microsoft Excel (Advanced Formulas, PivotTables), Bloomberg Terminal, MATLAB, R
                    Financial Databases: Capital IQ, FactSet, Morningstar Direct`,
      company: "Tower Research",
      Companylogo:
        "https://mms.businesswire.com/media/20211104006393/en/923961/23/Tower%2BU.S.jpg",
    },
    {
      id: 5,
      title: "Sales Representative",
      description: "Join our sales team and help us reach new customers...",
      company: "Salesforce",
      Companylogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYDyqh5PHg4He2I9HQEDfBNpxxttFog73ODw&usqp=CAU",
    },
    {
      id: 6,
      title: "UX/UI Designer",
      description: `Job Requirements:
                    Opening for a talented UX/UI designer to create engaging user experiences.
                    Skills:
                    Proficiency in design tools such as Adobe XD, Sketch, or Figma for creating wireframes, prototypes, and user interfaces.
                    Understanding of user-centered design principles and best practices.
                    Familiarity with usability testing and user research techniques for gathering feedback and insights.
                    Knowledge of front-end development technologies like HTML, CSS, and JavaScript for implementing designs.
                    Relevant Technologies and Packages:
                    UX/UI Design: Adobe XD, Sketch, Figma, InVision
                    Front-end Development: HTML, CSS, JavaScript, React, Vue.js
`,
      company: "JP Morgan",
      Companylogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzb77MrQPW0leiWAIWf0n9Qfs-IpLAgk3-Xw&usqp=CAU",
    },
    {
      id: 7,
      title: "Project Manager intern",
      description: `Job Requirements:
                    Seeking an experienced project manager to lead teams and ensure project success.
                    Skills:
                    Strong leadership and communication skills for effectively managing and coordinating project teams.
                    Proficiency in project management methodologies such as Agile, Scrum, or Waterfall for efficient project execution.
                    Familiarity with project management tools like JIRA, Asana, or Trello for task tracking and collaboration.
                    Knowledge of risk management and problem-solving techniques for overcoming project challenges.
                    Relevant Technologies and Packages:
                    Project Management: JIRA, Asana, Trello, Microsoft Project`,
      company: "Morgan Stanley",
      Companylogo:
        "https://logos-world.net/wp-content/uploads/2021/02/Morgan-Stanley-Symbol.png",
    },
    {
      id: 8,
      title: "Business Analyst",
      description: `Job Requirements:
                    Join the team as a business analyst and drive data insights.
                    Skills:
                    Strong analytical and problem-solving skills for analyzing business data and identifying improvement opportunities.
                    Proficiency in data analysis tools such as Excel, SQL, or Python for data manipulation and visualization.
                    Familiarity with business intelligence (BI) platforms like Power BI or Tableau for creating dashboards and reports.
                    Understanding of business processes and systems for identifying gaps and proposing solutions.
                    Relevant Technologies and Packages:
                    Data Analysis: Microsoft Excel (PivotTables, Formulas), SQL, Python (NumPy, Pandas, Matplotlib)
                    Business Intelligence: Power BI, Tableau`,
      company: "TCS",
      Companylogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUi3-hnxun8IOf6bpRpIsg2HMfDyWyFffUsg&usqp=CAU",
    },
    {
      id: 9,
      title: "HR Intern",
      description: `Job Requirements:
                    Hiring an HR coordinator to support the HR department.
                    Skills:
                    Strong organizational and administrative skills for managing HR-related tasks.
                    Familiarity with HR software and tools for managing employee data and HR processes.
                    Good communication skills for effectively interacting with employees and handling HR-related inquiries.
                    Understanding of HR policies and regulations for compliance and employee relations.
                    Relevant Technologies and Packages:
                    HR Software: Workday, BambooHR, SAP SuccessFactors`,
      company: "Accenture",
      Companylogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgZ0QJ01C8DdloaCIScm4ZEU2EkK_4qRcU9g&usqp=CAU",
    },
    {
      id: 10,
      title: "Content Writer",
      description: `Job Requirements:
                    Looking for a skilled content writer to create engaging content.
                    Skills:
                    Excellent writing and editing skills with a strong command of grammar and vocabulary.
                    Proficiency in content management systems (CMS) such as WordPress or Drupal for content creation and publishing.
                    Familiarity with search engine optimization (SEO) techniques for optimizing content for search engines.
                    Understanding of content marketing strategies and audience targeting.
                    Relevant Technologies and Packages:
                    Content Management Systems: WordPress, Drupal, Joomla`,
      company: "Jane Street",
      Companylogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEnreeT4D0WWCJGlkDCQkvmMmXokRMK3ZlA&usqp=CAU",
    },
  ]);

  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationForm, setApplicationForm] = useState({
    name: "",
    email: "",
    resume: "",
    coverLetter: "",
    cgpa: "",
    semester: "",
  });

  const jobDetailsRef = useRef(null);

  const handleJobClick = (job) => {
    setSelectedJob(job);
    if (jobDetailsRef.current) {
      const elementRect = jobDetailsRef.current.getBoundingClientRect();
      const offset =
        elementRect.top + elementRect.height / 2 - window.innerHeight / 2;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  const handleInputChange = (e) => {
    setApplicationForm({
      ...applicationForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleApply = (e) => {
    e.preventDefault();
    // Send the application form data to the server or perform necessary actions
    console.log("Application submitted:", applicationForm);
    // Clear the application form
    setApplicationForm({
      name: "",
      email: "",
      resume: "",
      coverLetter: "",
      cgpa: "",
      semester: "",
    });
    // Clear the selected job
    setSelectedJob(null);
  };

  return (
    <div>
      <div className="scrolling-text-container">
        <span className="scrolling-text">Open Jobs</span>
      </div>
      <div className="job-list">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="job-item"
            onClick={() => handleJobClick(job)}
          >
            <img
              src={job.Companylogo}
              alt={`${job.company} Logo`}
              className="company-logo"
            />
            <h2>{job.title}</h2>
            <p>{job.company}</p>
          </div>
        ))}
      </div>
      {selectedJob && (
        <div className="job-details" ref={jobDetailsRef}>
          <h2>{selectedJob.title}</h2>
          <p>{selectedJob.description}</p>
          <form onSubmit={handleApply}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={applicationForm.name}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={applicationForm.email}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="resume">Resume:</label>
            <input
              type="file"
              id="resume"
              name="resume"
              value={applicationForm.resume}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="cgpa">CGPA:</label>
            <input
              type="text"
              id="cgpa"
              name="cgpa"
              value={applicationForm.cgpa}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="semester">Semester:</label>
            <input
              type="text"
              id="semester"
              name="semester"
              value={applicationForm.semester}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="coverLetter">Cover Letter:</label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              value={applicationForm.coverLetter}
              onChange={handleInputChange}
              rows={5}
              required
            ></textarea>
            <button type="submit">Apply</button>
          </form>
        </div>
      )}
    </div>
  );
};
export default SearchJob;
