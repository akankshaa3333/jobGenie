
import React, { useState } from "react";

const ebooks = [
  { 
    id: 1, title: "Eloquent JavaScript", 
    image: require("../assets/javacover.jpg"), 
    viewLink: "https://eloquentjavascript.net/", 
    downloadLink: "https://eloquentjavascript.net/Eloquent_JavaScript.pdf" 
  },
  { 
    id: 2, title: "Python Crash Course", 
    image: require("../assets/pycover.jpg"),
    viewLink: "https://automatetheboringstuff.com/", 
    downloadLink: "https://www.pdfdrive.com/python-crash-course-e18383708.html" 
  },
  { 
    id: 3, title: "HTML & CSS Guide", 
    image: require("../assets/h.jpg"), 
    viewLink: "https://developer.mozilla.org/en-US/docs/Web/HTML", 
    downloadLink: "https://www.pdfdrive.com/html-and-css-design-and-build-websites-e20000294.html" 
  },
  { 
    id: 4, title: "C Programming Book", 
    image: require("../assets/Ccover.png"),
    viewLink: "https://en.wikipedia.org/wiki/The_C_Programming_Language", 
    downloadLink: "https://www.pdfdrive.com/the-c-programming-language-e34364578.html" 
  },
  { 
    id: 5, title: "Mastering Data Structures", 
    image: require("../assets/ds.jpg"),
    viewLink: "https://www.geeksforgeeks.org/data-structures/", 
    downloadLink: "https://www.pdfdrive.com/data-structures-and-algorithms-made-easy-e34567203.html" 
  },
  { 
    id: 6, title: "Machine Learning Basics", 
    image:require("../assets/ml.jpg"),
    viewLink: "https://www.coursera.org/learn/machine-learning", 
    downloadLink: "https://www.pdfdrive.com/machine-learning-for-beginners-e34598763.html" 
  },
  { 
    id: 7, title: "Operating System Concepts", 
    image: require("../assets/os.jpg"),
    viewLink: "https://pages.cs.wisc.edu/~remzi/OSTEP/", 
    downloadLink: "https://www.pdfdrive.com/operating-system-concepts-e34545698.html" 
  },
  { 
    id: 8, title: "Computer Networks", 
    image: require("../assets/cn.jpg"),
    viewLink: "https://www.geeksforgeeks.org/computer-network-tutorials/", 
    downloadLink: "https://www.pdfdrive.com/computer-networking-a-top-down-approach-e34235578.html" 
  },
  { 
    id: 9, title: "SQL & Database Management", 
    image: require("../assets/dbms.jpg"),
    viewLink: "https://www.w3schools.com/sql/", 
    downloadLink: "https://www.pdfdrive.com/sql-the-ultimate-guide-e34846792.html" 
  },
  { 
    id: 10, title: "Artificial Intelligence", 
    image: require("../assets/ai.jpg"),
    viewLink: "https://www.ibm.com/cloud/learn/what-is-artificial-intelligence", 
    downloadLink: "https://www.pdfdrive.com/artificial-intelligence-a-modern-approach-e34987645.html" 
  },
  { 
    id: 11, title: "Cybersecurity Essentials", 
    image: require("../assets/cb.jpg"), 
    viewLink: "https://www.cybrary.it/", 
    downloadLink: "https://www.pdfdrive.com/cybersecurity-essentials-e34659873.html" 
  },
  { 
    id: 12, title: "Full Stack Web Development", 
    image: require("../assets/fs.jpg"),
    viewLink: "https://www.theodinproject.com/", 
    downloadLink: "https://www.pdfdrive.com/full-stack-web-development-e34875612.html" 
  }
];

const Ebook = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredEbooks = ebooks.filter((ebook) =>
    ebook.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>E-books & Notes</h1>
      <input
        type="text"
        placeholder="Search for an e-book..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchBar}
      />
      <div style={styles.ebookList}>
        {filteredEbooks.map((ebook) => (
          <div
            key={ebook.id}
            style={{ 
              ...styles.ebookCard, 
              ...(hoveredCard === ebook.id ? styles.ebookCardHover : {}) 
            }}
            onMouseEnter={() => setHoveredCard(ebook.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img src={ebook.image} alt={ebook.title} style={styles.ebookImage} />
            <h3 style={styles.ebookTitle}>{ebook.title}</h3>
            <div style={styles.buttonContainer}>
              <a href={ebook.viewLink} target="_blank" rel="noopener noreferrer" style={styles.viewButton}>
                📖 View
              </a>
              <a href={ebook.downloadLink} target="_blank" rel="noopener noreferrer" style={styles.downloadButton}>
                ⬇️ Download
              </a>
            </div>
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
    padding: "40px",
    textAlign: "center",
  },
  heading: {
    color: "black",
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
  ebookList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "30px",
    justifyContent: "center",
    padding: "0 50px",
  },
  ebookCard: {
    background: "#d0ee2a",
    color: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    width: "280px",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ebookCardHover: {
    transform: "scale(1.05)",
    boxShadow: "0px 6px 12px rgba(0,0,0,0.2)",
  },
  ebookImage: {
    width: "180px",
    height: "240px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "15px",
  },
  ebookTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "center",
    color: "black",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
  },
  viewButton: {
    background: "#ffffff",
    color: "black",
    padding: "12px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "18px",
    width: "90%",
    display: "inline-block",
    transition: "background 0.3s, transform 0.2s",
    textAlign: "center",
  },
  downloadButton: {
    background: "#ffffff",
    color: "black",
    padding: "12px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "18px",
    width: "90%",
    display: "inline-block",
    transition: "background 0.3s, transform 0.2s",
    textAlign: "center",
  },
};

export default Ebook;