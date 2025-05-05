import React from "react";
import "./Footer.css";

// Import images properly from assets
import GoogleLogo from "../assets/google.png";
import WalmartLogo from "../assets/microsoft.png";
import AsianPaintsLogo from "../assets/face.png";
import AdityaBirlaLogo from "../assets/flipkart.png";
import HPLogo from "../assets/amazon.png";
import WiproLogo from "../assets/apple.png";

const logos = [
  GoogleLogo,
  WalmartLogo,
  AsianPaintsLogo,
  AdityaBirlaLogo,
  HPLogo,
  WiproLogo,
];

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>
          Industry veterans <span className="trust-us">Trust us</span>
        </p>
      </div>

      {/* Floating Company Logos */}
      <div className="logo-slider">
        <div className="logo-track">
          {logos.concat(logos).map((logo, index) => (
            <img key={index} src={logo} alt={`Company Logo ${index}`} />
          ))}
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} JobGenie. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

