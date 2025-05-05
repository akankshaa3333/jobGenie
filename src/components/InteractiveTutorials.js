import React, { useState } from "react";

const tutorials = [
  { id: 1, title: "How to Make a Resume", url: "https://www.youtube.com/embed/y8YH0Qbu5h4" },
  { id: 2, title: "How to Speak Fluent English", url: "https://www.youtube.com/embed/Ge7c7otG2mk" },
  { id: 3, title: "How to Interact with People", url: "https://www.youtube.com/embed/HAnw168huqA" },
  { id: 4, title: "13 Everyday Habits That Make You Smarter", url: "https://www.youtube.com/embed/N9uHR5pL0XE" },
  { id: 5, title: "How to Talk with Interviewers", url: "https://www.youtube.com/embed/gU96bD1_69M" },
  { id: 6, title: "How to Make Impressive Projects", url: "https://www.youtube.com/embed/pCj0Jr-ktp4" },
  { id: 7, title: "How to Give Interviews with Confidence", url: "https://www.youtube.com/embed/NA5_WyR6xYM" },
  { id: 8, title: "Time Management Skills", url: "https://www.youtube.com/embed/xgp6eELYY1M" },
  { id: 9, title: "Mastering Public Speaking", url: "https://www.youtube.com/embed/UQt-8tCvMPQ" },
  { id: 10, title: "Career Planning for Success", url: "https://www.youtube.com/embed/8ZRypDjPN8U" },
  { id: 11, title: "How to Negotiate Salary", url: "https://www.youtube.com/embed/kBIN2h16Rc4" },
  { id: 12, title: "How to Improve Productivity", url: "https://www.youtube.com/embed/iC3RR_ezqwY" }
];

const InteractiveTutorials = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredTutorials = tutorials.filter((tutorial) =>
    tutorial.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Interactive Tutorials</h1>
      <input
        type="text"
        placeholder="Search for a tutorial..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchBar}
      />
      <div style={styles.tutorialList}>
        {filteredTutorials.map((tutorial) => (
          <div
            key={tutorial.id}
            style={{ 
              ...styles.tutorialCard, 
              ...(hoveredCard === tutorial.id ? styles.tutorialCardHover : {}) 
            }}
            onMouseEnter={() => setHoveredCard(tutorial.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <iframe
              width="100%"
              height="200"
              src={tutorial.url}
              title={tutorial.title}
              frameBorder="0"
              allowFullScreen
              style={styles.video}
            ></iframe>
            <h3 style={styles.tutorialTitle}>{tutorial.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  page: {
    background: "#ffffff",
    minHeight: "100vh",
    padding: "30px",
    textAlign: "center",
  },
  heading: {
    color: "black",
    fontSize: "32px",
    marginBottom: "20px",
  },
  searchBar: {
    width: "50%",
    padding: "12px",
    fontSize: "16px",
    border: "2px solid #ddd",
    borderRadius: "5px",
    marginBottom: "30px",
  },
  tutorialList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "30px",
    justifyContent: "center",
    padding: "0 50px",
  },
  tutorialCard: {
    background: "#bed732",
    color: "#fff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.3)",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  tutorialCardHover: {
    transform: "scale(1.05)",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
  },
  video: {
    borderRadius: "5px",
  },
  tutorialTitle: {
    color: "black",
    marginTop: "10px",
    fontSize: "16px",
  },
};

export default InteractiveTutorials;