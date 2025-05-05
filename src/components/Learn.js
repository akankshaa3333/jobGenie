import React from "react";
import "./Learn.css";
import tutorialImg from "../assets/www.jpg";
import videoImg from "../assets/xyz.jpg";
import ebookImg from "../assets/yyy.jpg";
import Footer from "../components/Footer";


const Learn = () => {
  return (
    <div className="learn-container">
      {/* Banner Section */}
      <div className="banner">
        <h2>Learn - Expand Your Knowledge</h2>
      </div>

      {/* Cards Section */}
      <div className="cards-container">
        <div className="course-card">
          <img src={tutorialImg} alt="Interactive Tutorials" />
          <h3>Interactive Tutorials</h3>
          <p>Master new concepts with hands-on, step-by-step tutorials.</p>
          <a href="/interactive-tutorials" className="btn">Start Learning</a>
        </div>

        <div className="course-card">
          <img src={videoImg} alt="Video Lectures" />
          <h3>Video Lectures</h3>
          <p>Watch expert-curated video lectures across various topics.</p>
          <a href="/watch-videos" className="btn">Watch Video</a>
        </div>

        <div className="course-card">
          <img src={ebookImg} alt="E-books & Notes" />
          <h3>E-books & Notes</h3>
          <p>Access a wide range of e-books and resources.</p>
          <a href="/explore-resources" className="btn">Explore Resources</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Learn;

