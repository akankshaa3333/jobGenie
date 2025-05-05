// Competitions.js
import React from "react";
import { Link } from "react-router-dom";
import "./Competitions.css";

const Competitions = () => {
  return (
    <div className="competitions-container">
      <h1>Practice & Competitions</h1>
      <div className="competition-cards">
        <Link to="/coding-challenges" className="competition-card">
          <h3>Coding Challenges</h3>
          <p>Enhance your problem-solving skills</p>
        </Link>
        <Link to="/daily-quizzes" className="competition-card">
          <h3>Daily Quizzes</h3>
          <p>Test your knowledge daily</p>
        </Link>
        <Link to="/skill-assessments" className="competition-card">
          <h3>Skill Assessments</h3>
          <p>Evaluate your technical skills</p>
        </Link>
      </div>
    </div>
  );
};

export default Competitions;