import React, { useState } from "react";

const challenges = [
  { id: 1, title: "Javascript", platform: "edabit", link: "https://edabit.com/challenges" },
  { id: 2, title: "Python", platform: "codechef", link: "https://www.codechef.com/practice/course/python-coding-challenges/PYTHONCHC01/problems/PYTHONCH01" },
  { id: 3, title: "DSA", platform: "codehcef", link: "https://www.codechef.com/practice#data-structures" },
  { id: 4, title: "DAA", platform: "hackerearth", link: "https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/" },
  { id: 5, title: "SQL", platform: "codechef", link: "https://www.codechef.com/practice/course/sql-case-studies-topic-wise/SQLBP01/problems/SQLPBP11" },
  { id: 6, title: "Window Sliding Technique", platform: "geeksofrgeeks", link: "https://www.geeksforgeeks.org/explore?page=1&category=sliding-window&sortBy=submissions" },
  { id: 7, title: "Java", platform: "edabit", link: "https://edabit.com/challenges/java#!" },
  { id: 8, title: "Hashing", platform: "geeksforgeeks", link: "https://www.geeksforgeeks.org/explore?page=1&category=Hash&sortBy=submissions" },
  { id: 9, title: "C", platform: "codechef", link: "https://www.codechef.com/practice/course/c/LPCAS01/problems/LCAS01" },
  { id: 10, title: "C++", platform: "edabit", link: "https://edabit.com/challenges/cpp" },
  { id: 11, title: "Cybersecurity", platform: "cybertalents", link: "https://cybertalents.com/challenges" },
  { id: 12, title: "php", platform: "sanfoundry", link: "https://edabit.com/challenges/php" },
  { id: 13, title: "C#", platform: "codechef", link: "https://edabit.com/challenges" },
  { id: 14, title: "DBMS", platform: "hackerrank", link: "https://www.hackerrank.com/domains/databases" },
  { id: 15, title: "Cloud Computing", platform: "sanfoundry", link: "https://www.sanfoundry.com/1000-cloud-computing-questions-answers/" },
  { id: 16, title: "Deep learning", platform: "aoionline", link: "https://www.aionlinecourse.com/ai-quiz-questions/deep-learning" },
  { id: 17, title: "Computer Vision", platform: "mcqprime", link: "https://mcqprime.com/computer-vision-mcq/" },
  { id: 18, title: "Big Data", platform: "sanfoundary", link: "https://www.sanfoundry.com/bigdata-questions-answers/" },
  // { id: 19, title: "Rotate Image (Matrix)", platform: "LeetCode", link: "https://leetcode.com/problems/rotate-image/" },
  // { id: 20, title: "Graph Cycle Detection", platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/detect-cycle-in-a-graph/" },
  // { id: 21, title: "N-Queens Problem", platform: "LeetCode", link: "https://leetcode.com/problems/n-queens/" },
  // { id: 22, title: "Detect a Loop in a Linked List", platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/" },
  // { id: 23, title: "Knapsack Problem", platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/" },
  // { id: 24, title: "Binary Tree Zigzag Level Order Traversal", platform: "LeetCode", link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/" },
  // { id: 25, title: "Trapping Rain Water", platform: "LeetCode", link: "https://leetcode.com/problems/trapping-rain-water/" },
  // { id: 26, title: "Median of Two Sorted Arrays", platform: "LeetCode", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
  // { id: 27, title: "Sliding Window Maximum", platform: "LeetCode", link: "https://leetcode.com/problems/sliding-window-maximum/" },
  // { id: 28, title: "Combination Sum", platform: "LeetCode", link: "https://leetcode.com/problems/combination-sum/" },
  // { id: 29, title: "Alien Dictionary", platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/given-sorted-dictionary-find-precedence-characters/" },
  // { id: 30, title: "java", platform: "LeetCode", link: "https://leetcode.com/problems/two-sum/" },
  // { id: 31, title: "Flatten a Multilevel Doubly Linked List", platform: "LeetCode", link: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/" },
  // { id: 32, title: "Minimum Path Sum", platform: "LeetCode", link: "https://leetcode.com/problems/minimum-path-sum/" },
  // { id: 33, title: "Find the Celebrity", platform: "LeetCode", link: "https://leetcode.com/problems/find-the-celebrity/" }

];

const CodingChallenges = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredChallenges = challenges.filter((challenge) =>
    challenge.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Coding Challenges</h1>
      <input
        type="text"
        placeholder="Search for a challenge..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchBar}
      />
      <div style={styles.challengeList}>
        {filteredChallenges.map((challenge) => (
          <div
            key={challenge.id}
            style={{ 
              ...styles.challengeCard, 
              ...(hoveredCard === challenge.id ? styles.challengeCardHover : {}) 
            }}
            onMouseEnter={() => setHoveredCard(challenge.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3 style={styles.challengeTitle}>{challenge.title}</h3>
            <p style={styles.platform}>📌 {challenge.platform}</p>
            <a href={challenge.link} target="_blank" rel="noopener noreferrer" style={styles.solveButton}>
              🔗 Solve Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

// **STYLING**
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
  challengeList: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", 
    gap: "30px",
    justifyContent: "center",
    padding: "0 50px",
  },
  challengeCard: {
    background: "#6cd0d0",
    color: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    width: "300px",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  challengeCardHover: {
    transform: "scale(1.1)",
    boxShadow: "0px 6px 12px rgba(255, 255, 255, 0.5)",
  },
  challengeTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "center",
  },
  platform: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#222",
    marginBottom: "15px",
  },
  solveButton: {
    background: "#fff",
    color: "#000",
    padding: "10px 15px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "18px",
    width: "90%",
    display: "inline-block",
    transition: "background 0.3s, transform 0.2s",
    textAlign: "center",
  }
};

export default CodingChallenges;