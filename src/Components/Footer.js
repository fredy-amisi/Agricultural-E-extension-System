import React from 'react';

const Footer = () => {
  return (
    <>
    <footer>
      <div className="dylan">
        <h1 id="agr">2024 Agricultural E-Extension System.<br/>Empowering farmers with knowledge and support.<br/>Stay informed, stay productive.</h1>
      </div>
      <div className="Copyright">
        <p className="Copyright">© {new Date().getFullYear()} - All Rights Reserved. Designed by Dylan<br/> 0113918190</p>
      </div>
      <div className="follow">
        <h1>Follow us</h1>
        <div className="follow-h3">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><h3>Facebook</h3></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><h3>LinkedIn</h3></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><h3>Twitter</h3></a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><h3>GitHub</h3></a>
        </div>
      </div>
      <div className="links">
        <h1>Quick Links</h1>
        <div className="links-div">
          <a href="/Signup"><h3>Get Started</h3></a>
          <a href="/Login"><h3>Log In</h3></a>
          <a href="/information"><h3>Information</h3></a>
          <a href="/courses"><h3>Courses</h3></a>
          <a href="/Contact"><h3>Contact Us</h3></a>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
