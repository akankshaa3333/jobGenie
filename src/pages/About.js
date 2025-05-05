import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Navbar (same as Home) */}
      <nav className="navbar">
        <div className="logo">JobGenie</div>
        <div className="search-container">
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Search Opportunities" 
          />
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/internships" className="nav-link">Internships</Link>
          <Link to="/jobs" className="nav-link">Jobs</Link>
          <Link to="/competitions" className="nav-link">Competitions</Link>
          <Link to="/start-learning" className="nav-link">Practice</Link>
          <Link to="/about" className="nav-link active">About</Link>
        </div>
      </nav>

      <div className="about-content">
        <h1>About JobGenie</h1>
        
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            JobGenie is dedicated to bridging the gap between talented individuals and 
            their dream careers. We provide a comprehensive platform that connects 
            job seekers with internships, full-time positions, skill-building 
            opportunities, and competitions to help them grow professionally.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Internships</h3>
              <p>
                Gain valuable work experience with internships from top companies 
                across various industries.
              </p>
            </div>
            <div className="feature-card">
              <h3>Job Opportunities</h3>
              <p>
                Discover full-time and part-time positions that match your skills 
                and career aspirations.
              </p>
            </div>
            <div className="feature-card">
              <h3>Practice Areas</h3>
              <p>
                Enhance your skills with our practice modules and prepare for 
                technical interviews.
              </p>
            </div>
            <div className="feature-card">
              <h3>Competitions</h3>
              <p>
                Participate in challenges to showcase your talents and stand out 
                to potential employers.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Our Team</h2>
          <p>
            JobGenie was founded by a group of passionate professionals who 
            understand the challenges of job hunting. Our team combines expertise 
            in technology, human resources, and career development to create a 
            platform that truly serves job seekers and employers alike.
          </p>
        </section>

        <section className="about-section">
          <h2>Contact Us</h2>
          <p>
            Have questions or feedback? We'd love to hear from you!
            <br />
            Email: contact@jobgenie.com
            <br />
            Phone: +1 (123) 456-7890
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;