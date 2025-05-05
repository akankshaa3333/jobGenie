import React, { useEffect, useState } from "react";
import "./Internship.css";

const Internship = () => {
  const [internships, setInternships] = useState([]);
  const [error, setError] = useState(null); // ✅ Error handling added

  useEffect(() => {
    fetch("http://localhost:5000/api/internships")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch internships");
        }
        return response.json();
      })
      .then((data) => {
        setInternships(data);
      })
      .catch((error) => {
        console.error("Error fetching internships:", error);
        setError(error.message); // ✅ Set error
      });
  }, []);

  return (
    <div className="internship-container">
      <h1>🚀 Explore Top Internships</h1>
      <p>Find the best opportunities to grow your career.</p>

      {error ? ( // ✅ Show error if API fails
        <p style={{ color: "red" }}>❌ {error}</p>
      ) : internships.length === 0 ? (
        <p>Loading internships...</p>
      ) : (
        <div className="internship-list">
          {internships.map((internship) => (
            <div className="internship-card" key={internship.id}>
              <h3>{internship.title}</h3>
              <p>🏢 {internship.company}</p>
              <p>📍 {internship.location}</p>
              <p>💰 {internship.stipend}</p>
              <a href={internship.link} target="_blank" rel="noopener noreferrer">
                <button className="apply-btn">Apply Now</button>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Internship;
