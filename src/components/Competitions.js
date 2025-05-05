import React from "react";
import { useNavigate } from "react-router-dom";
import codingImg from "../assets/ccc.jpg";
import skillImg from "../assets/ddd.jpg";
import quizzesImg from "../assets/qqq.jpg";
import "./Competitions.css"; // Same styling
import Footer from "../components/Footer";

const Competitions = () => {
  const navigate = useNavigate();

  return (
    <div className="competitions-container">
      {/* Banner Section */}
      <div className="banner">
        <h2>Practice - Refine Your Skills</h2>
      </div>

      {/* Cards Section */}
      <div className="cards-container">
        {/* Coding Challenges */}
        <div className="competition-card">
          <img src={codingImg} alt="Coding Challenges" />
          <h3>Coding Challenges</h3>
          <p>Enhance your problem-solving skills by tackling a variety of coding challenges.</p>
          <button className="btn" onClick={() => navigate("/coding-challenges")}>Learn More</button>
        </div>

        {/* Skill Assessments */}
        <div className="competition-card">
          <img src={skillImg} alt="Skill Assessments" />
          <h3>Skill Assessments</h3>
          <p>Test your knowledge with skill assessments designed to evaluate your proficiency in various domains.</p>
          <button className="btn" onClick={() => navigate("/skill-assessments")}>Learn More</button>
        </div>

        {/* Daily Quizzes */}
        <div className="competition-card">
          <img src={quizzesImg} alt="Daily Quizzes" />
          <h3>Daily Quizzes</h3>
          <p>Stay sharp with daily quizzes that cover a wide range of topics and difficulty levels.</p>
          <button className="btn" onClick={() => navigate("/daily-quizzes")}>Learn More</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Competitions;
