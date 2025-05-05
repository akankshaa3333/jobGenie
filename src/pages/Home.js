import React, { useState, useEffect } from "react";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { auth, storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { onAuthStateChanged, signOut } from "firebase/auth";
import internImage from "../assets/girl1.png";
import jobImage from "../assets/boy.png";
import practiceImage from "../assets/award.png";
import competitionImage from "../assets/girl.png";
import "./Home.css";
import Footer from "../components/Footer";

const Home = () => {
  const [user, setUser] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      
      if (currentUser) {
        setNotifications([
          { id: 1, text: "Succesfully Login", read: false }
        ]);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/signin");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    
    if (!showNotifications) {
      setNotifications(notifications.map(n => ({ ...n, read: true })));
    }
  };

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">JobGenie</div>

        <div className="search-container">
          <FaSearch className="search-icon" />
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Search Opportunities" 
          />
        </div>

        <div className="nav-links">
          <Link to="/internships" className="nav-link">Internships</Link>
          <Link to="/jobs" className="nav-link">Jobs</Link>
          <Link to="/competitions" className="nav-link">Competitions</Link>
          <Link to="/start-learning" className="nav-link">Practice</Link>
          <Link to="/about" className="nav-link">About</Link>
          
          {user ? (
            <div className="user-actions">
              <div className="notification-icon" onClick={toggleNotifications}>
                <FaBell />
                {notifications.some(n => !n.read) && (
                  <span className="notification-badge"></span>
                )}
                {showNotifications && (
                  <div className="notification-dropdown">
                    <h4>Notifications</h4>
                    {notifications.length > 0 ? (
                      notifications.map(notification => (
                        <div 
                          key={notification.id} 
                          className={`notification-item ${notification.read ? '' : 'unread'}`}
                        >
                          <p>{notification.text}</p>
                          <small>{notification.time}</small>
                        </div>
                      ))
                    ) : (
                      <p className="no-notifications">No new notifications</p>
                    )}
                  </div>
                )}
              </div>
              
              <div className="user-profile">
                <FaUser />
                <div className="profile-dropdown">
                  <p>{user.email}</p>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            </div>
          ) : (
            <button 
              className="login-btn" 
              onClick={() => navigate("/signin")}
            >
              Login
            </button>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <h1>
          Unlock <span className="highlight">Your Career</span>
        </h1>
        <p>
          Explore opportunities from across the globe to grow, showcase skills, gain CV points, 
          & get hired by your dream company.
        </p>
      </header>

      {/* Cards Section */}
      <div className="cards-container">
        <Link to="/internships" className="card internship" style={{ textDecoration: 'none' }}>
          <div className="card-content">
            <h3>Internships</h3>
            <p>Gain Practical Experience</p>
          </div>
          <img src={internImage} alt="Internship" className="card-image" />
        </Link>

        <Link to="/jobs" className="card jobs" style={{ textDecoration: 'none' }}>
          <div className="card-content">
            <h3>Jobs</h3>
            <p>Explore Diverse Careers</p>
          </div>
          <img src={jobImage} alt="Jobs" className="card-image" />
        </Link>

        <Link to="/start-learning" className="card practice" style={{ textDecoration: 'none' }}>
          <div className="card-content">
            <h3>Practice</h3>
            <p>Refine Skills Daily</p>
          </div>
          <img src={practiceImage} alt="Practice" className="card-image" />
        </Link>

        <Link to="/competitions" className="card competitions" style={{ textDecoration: 'none' }}>
          <div className="card-content">
            <h3>Competitions</h3>
            <p>Battle for Excellence</p>
          </div>
          <img src={competitionImage} alt="Competitions" className="card-image" />
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;