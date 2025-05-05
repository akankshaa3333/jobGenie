import React, { useState } from "react";

const videos = [
  { id: 1, title: "Understanding AI", url: "https://www.youtube.com/embed/2ePf9rue1Ao" },
  { id: 2, title: "Web Development Basics", url: "https://www.youtube.com/embed/3JluqTojuME" },
  { id: 3, title: "How the Internet Works", url: "https://www.youtube.com/embed/7_LPdttKXPc" },
  { id: 4, title: "JavaScript Full Course", url: "https://www.youtube.com/embed/PkZNo7MFNFg" },
  { id: 5, title: "HTML & CSS Crash Course", url: "https://www.youtube.com/embed/mU6anWqZJcc" },
  { id: 6, title: "React for Beginners", url: "https://www.youtube.com/embed/DLX62G4lc44" },
  { id: 7, title: "Understanding APIs", url: "https://www.youtube.com/embed/s7wmiS2mSXY" },
  { id: 8, title: "Node.js Crash Course", url: "https://www.youtube.com/embed/fBNz5xF-Kx4" },
  { id: 9, title: "Python Programming", url: "https://www.youtube.com/embed/WGJJIrtnfpk" },
  { id: 10, title: "Data Science Explained", url: "https://www.youtube.com/embed/X3paOmcrTjQ" },
  { id: 11, title: "Machine Learning Tutorial", url: "https://www.youtube.com/embed/GwIo3gDZCVQ" },
  { id: 12, title: "Cybersecurity Fundamentals", url: "https://www.youtube.com/embed/3Kq1MIfTWCE" }
];

const WatchVideo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Watch Video Lectures</h1>
      <input
        type="text"
        placeholder="Search for a video..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchBar}
      />
      <div style={styles.videoList}>
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            style={{ 
              ...styles.videoCard, 
              ...(hoveredCard === video.id ? styles.videoCardHover : {}) 
            }}
            onMouseEnter={() => setHoveredCard(video.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <iframe
              width="100%"
              height="200"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allowFullScreen
              style={styles.video}
            ></iframe>
            <h3 style={styles.videoTitle}>{video.title}</h3>
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
  videoList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "40px",
    justifyContent: "center",
    padding: "0 50px",
  },
  videoCard: {
    background: "#d0ee2a",
    color: "#fff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.3)",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  videoCardHover: {
    transform: "scale(1.05)",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
  },
  video: {
    borderRadius: "5px",
  },
  videoTitle: {
    color: "black",
    marginTop: "10px",
    fontSize: "16px",
  },
};

export default WatchVideo;
