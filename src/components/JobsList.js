import React, { useState, useEffect } from 'react';
import './JobsList.css';

const JobsList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/jobs?_=' + Date.now());
        const { data } = await response.json();
        setJobs(data || []);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div className="loading">Loading latest jobs from LinkedIn...</div>;
  }

  const pastelColors = [
    "#FFEB99", "#C1E1C1", "#F08080", "#D5AAFF", "#85E3FF"
  ];

  return (
    <div className="jobs-container">
      <h1>Latest Job Opportunities</h1>
      
      <div className="jobs-list">
        {jobs.map((job, index) => (
          <div 
            key={job.id} 
            className="job-card"
            style={{ backgroundColor: pastelColors[index % pastelColors.length] }}
          >
            <div className="job-content">
              <h2>{job.title}</h2>
              <h3>{job.company}</h3>
              <p className="location">{job.location}</p>
              <p className="posted">{job.posted}</p>
              <a 
                href={job.applyLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="apply-button"
              >
                Apply now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsList;
