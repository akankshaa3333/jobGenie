import React, { useState } from "react";

const assessments = [
  { id: 1, title: "Data Structures", link: "https://www.hackerrank.com/domains/tutorials/10-days-of-data-structures" },
  { id: 2, title: "Algorithms", link: "https://www.geeksforgeeks.org/fundamentals-of-algorithms/" },
  { id: 3, title: "JavaScript", link: "https://www.w3schools.com/js/js_quiz.asp" },
  { id: 4, title: "Python", link: "https://www.hackerrank.com/domains/tutorials/10-days-of-python" },
  { id: 5, title: "SQL & Databases", link: "https://www.hackerrank.com/domains/sql" },
  { id: 6, title: "Operating Systems", link: "https://www.udemy.com/course/operating-systems-principles/" },
  { id: 7, title: "Networking", link: "https://www.coursera.org/learn/computer-networking" },
  { id: 8, title: "System Design", link: "https://www.educative.io/courses/grokking-the-system-design-interview" },
  { id: 9, title: "Web Development", link: "https://www.freecodecamp.org/" },
  { id: 10, title: "React.js", link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/" },
  { id: 11, title: "Node.js", link: "https://www.coursera.org/learn/server-side-nodejs" },
  { id: 12, title: "C Programming", link: "https://www.hackerrank.com/domains/tutorials/10-days-of-c" },
  { id: 13, title: "C++ Programming", link: "https://www.geeksforgeeks.org/c-plus-plus/" },
  { id: 14, title: "Java", link: "https://www.coursera.org/learn/java-programming" },
  { id: 15, title: "Artificial Intelligence", link: "https://www.edx.org/course/artificial-intelligence-ai" },
  { id: 16, title: "Machine Learning", link: "https://www.coursera.org/learn/machine-learning" },
  { id: 17, title: "Cybersecurity", link: "https://www.cybrary.it/catalog/cyber-security" },
  { id: 18, title: "Cloud Computing", link: "https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/" },
  { id: 19, title: "Linux & Shell Scripting", link: "https://www.hackerrank.com/domains/tutorials/bash-shell-scripting" },
  { id: 20, title: "Blockchain", link: "https://www.coursera.org/learn/blockchain-basics" },
  { id: 21, title: "Big Data", link: "https://www.udemy.com/course/big-data-the-complete-course/" },
  { id: 22, title: "Data Science", link: "https://www.datacamp.com/tracks/data-scientist-with-python" },
  { id: 23, title: "Android Development", link: "https://developer.android.com/courses/android-basics-kotlin/course" },
  { id: 24, title: "iOS Development", link: "https://developer.apple.com/learn/curriculum/" },
  { id: 25, title: "Software Testing", link: "https://www.udemy.com/course/automated-testing/" },
  { id: 26, title: "DevOps", link: "https://www.coursera.org/specializations/devops" },
  { id: 27, title: "Git & GitHub", link: "https://www.udemy.com/course/git-and-github-bootcamp/" },
  { id: 28, title: "Artificial Neural Networks", link: "https://www.udacity.com/course/deep-learning-nanodegree--nd101" },
  { id: 29, title: "Penetration Testing", link: "https://www.coursera.org/specializations/penetration-testing" },
  { id: 30, title: "Digital Marketing", link: "https://www.google.com/intl/en_in/skillshop/" },
  { id: 31, title: "UI/UX Design", link: "https://www.coursera.org/specializations/ui-ux-design" },
  { id: 32, title: "Embedded Systems", link: "https://www.udemy.com/course/embedded-systems-for-beginners/" },
  { id: 33, title: "Cyber Forensics", link: "https://www.coursera.org/learn/cyber-security-forensics" },
];

const SkillAssessments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredAssessments = assessments.filter((assessment) =>
    assessment.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Skill Assessments</h1>
      <input
        type="text"
        placeholder="Search for an assessment..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchBar}
      />
      <div style={styles.assessmentList}>
        {filteredAssessments.map((assessment) => (
          <div
            key={assessment.id}
            style={{
              ...styles.assessmentCard,
              ...(hoveredCard === assessment.id ? styles.cardHover : {}),
            }}
            onMouseEnter={() => setHoveredCard(assessment.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3 style={styles.title}>{assessment.title}</h3>
            <a href={assessment.link} target="_blank" rel="noopener noreferrer" style={styles.button}>
              📝 Take Test
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

// **STYLES**
const styles = {
  page: {
    background: "#f5f5f5",
    minHeight: "100vh",
    padding: "40px",
    textAlign: "center",
  },
  heading: {
    color: "#222",
    fontSize: "36px",
    marginBottom: "40px",
    fontWeight: "bold",
  },
  searchBar: {
    width: "60%",
    padding: "12px",
    fontSize: "18px",
    border: "2px solid #ddd",
    borderRadius: "5px",
    marginBottom: "25px",
  },
  assessmentList: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", 
    gap: "30px",
    justifyContent: "center",
    padding: "0 50px",
  },
  assessmentCard: {
    background: "#b8d53d",
    color: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    width: "300px",
    height: "180px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardHover: {
    transform: "scale(1.1)",
    boxShadow: "0px 6px 12px rgba(255, 255, 255, 0.5)",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "center",
  },
  button: {
    background: "#fff",
    color: "#000",
    padding: "10px 15px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "18px",
    width: "90%",
    textAlign: "center",
  },
};

export default SkillAssessments;