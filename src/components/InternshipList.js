import React, { useState, useEffect } from 'react';
import './InternshipList.css';

// Correct Image Imports
import boy1 from '../assets/boy1.png';
import boy2 from '../assets/girl5.png';
import girl2 from '../assets/girl2.png';
import boy3 from '../assets/boy3.png';
import girl3 from '../assets/girl4.png';

const InternshipList = () => {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/internships');
        
        if (!response.ok) {
          throw new Error('Failed to fetch internships');
        }

        const { data } = await response.json();
        setInternships(Array.isArray(data) ? data : []);
        
      } catch (err) {
        setError(err.message);
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchInternships();
  }, []);

  if (loading) return <div className="loading">Loading internships...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  const pastelColors = ["#C1E1C1", "#FFABAB",  "#D5AAFF","#FFEB99", "#85E3FF"];

  // ✅ Using Imported Images
  const internshipImages = [boy1, boy2, girl2, boy3, girl3];

  return (
    <div className="internship-container">
      <h1>Latest Internship Opportunities</h1>
      
      <div className="internship-list">
        {internships.length > 0 ? (
          internships.map((internship, index) => (
            <div 
              key={`internship-${internship.id || index}`}
              className="internship-card"
              style={{ backgroundColor: pastelColors[index % pastelColors.length] }}
            >
              <img 
                src={internshipImages[index % internshipImages.length]} 
                alt="Internship"
                className="internship-image"
              />
              <div className="internship-content">
                <h3>{internship.title || 'No title available'}</h3>
                <p><strong>{internship.company || 'Company not specified'}</strong></p>
                {internship.location && <p className="location">Location: {internship.location}</p>}
                {internship.applyLink && (
                  <a 
                    href={internship.applyLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="apply-button"
                  >
                    Apply Now
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="no-internships">No internships available</p>
        )}
      </div>
    </div>
  );
};

export default InternshipList;

