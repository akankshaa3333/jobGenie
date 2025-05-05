import React, { useState } from "react";

const quizzes = [
  { id: 1, title: "Java", platform: "LeetCode", link: "https://leetcode.com/problems/two-sum/" },
  { id: 2, title: "Python", platform: "codechef", link: "https://www.codechef.com/skill-test/basic-python" },
  { id: 3, title: "DSA", platform: "codehcef", link: "https://www.codechef.com/skill-test/c-language-dsa" },
  { id: 4, title: "DAA", platform: "Interviewbit", link: "https://www.codechef.com/skill-test/c-language-dsa" },
  { id: 5, title: "SQL", platform: "testdome", link: "https://app.testdome.com/screening/test/a9383e5a9fe243a9821595e47ad94c7b" },
  { id: 6, title: "Operating System", platform: "codechef", link: "https://www.codechef.com/skill-test/operating-systems" },
  { id: 7, title: "JavaScript", platform: "codechef", link: "https://www.codechef.com/skill-test/operating-systems" },
  { id: 8, title: "AI-ML", platform: "sanfoundry", link: "https://www.sanfoundry.com/artificial-intelligence-questions-answers/" },
  { id: 9, title: "C", platform: "codechef", link: "https://www.codechef.com/learn/course/c" },
  { id: 10, title: "C++", platform: "codechef", link: "https://www.codechef.com/learn/course/cpp" },
  { id: 11, title: "Cybersecurity", platform: "sanfoundry", link: "https://test.sanfoundry.com/cyber-security-tests/" },
  { id: 12, title: "Networking", platform: "sanfoundry", link: "https://www.sanfoundry.com/computer-network-questions-answers/" },
  { id: 13, title: "C#", platform: "codechef", link: "https://www.codechef.com/learn/course/c-sharp" },
  { id: 14, title: "DBMS", platform: "codechef", link: "https://www.codechef.com/learn/course/college-dbms" },
  { id: 15, title: "Cloud Computing", platform: "sanfoundry", link: "https://www.sanfoundry.com/1000-cloud-computing-questions-answers/" },
  { id: 16, title: "Deep learning", platform: "aoionline", link: "https://www.aionlinecourse.com/ai-quiz-questions/deep-learning" },
  { id: 17, title: "Computer Vision", platform: "mcqprime", link: "https://mcqprime.com/computer-vision-mcq/" },
  { id: 18, title: "Big Data", platform: "sanfoundary", link: "https://www.sanfoundry.com/bigdata-questions-answers/" },
];

const DailyQuizzes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredQuizzes = quizzes.filter((quiz) =>
    quiz.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Daily Quizzes</h1>
      <input
        type="text"
        placeholder="Search for a quiz..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchBar}
      />
      <div style={styles.quizList}>
        {filteredQuizzes.map((quiz) => (
          <div
            key={quiz.id}
            style={{
              ...styles.quizCard,
              ...(hoveredCard === quiz.id ? styles.cardHover : {}),
            }}
            onMouseEnter={() => setHoveredCard(quiz.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3 style={styles.title}>{quiz.title}</h3>
            <a href={quiz.link} target="_blank" rel="noopener noreferrer" style={styles.button}>
              🎯 Take Quiz
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
  quizList: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", 
    gap: "30px",
    justifyContent: "center",
    padding: "0 50px",
  },
  quizCard: {
    background: "#ce9dd9",
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

export default DailyQuizzes;