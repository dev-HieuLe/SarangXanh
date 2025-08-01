import React from "react";
import "./Footer.css"; // CSS below

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">SARANG<span>&</span>XANH</div>

      <div className="footer-grid">
        <div>
          <p>About</p>
          <p>Team</p>
          <p>Careers</p>
        </div>
        <div>
          <p>Projects</p>
          <p>Services</p>
          <p>Pricing</p>
        </div>
        <div>
          <p>Resources</p>
          <p>Help Center</p>
          <p>Guides</p>
        </div>
        <div>
          <p>Blog</p>
          <p>Contact</p>
          <p>Legal</p>
        </div>
      </div>

      <div className="footer-tagline">
        proudly made by <span className="highlight">SARANGXANH team</span>
      </div>

      <div className="footer-icons">     
        <span>🏳️‍🌈</span>
        <span>🌐</span>
        <span>🔗</span>
        <span>🦋</span>
      </div>
      {/* fix this into link icons */}

      <div className="footer-note">
        copyright here gang
      </div>
    </footer>
  );
};