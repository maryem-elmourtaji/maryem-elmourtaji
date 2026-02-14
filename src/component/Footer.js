import React from 'react';
import footer from '../assets/mery.jpg';

const Footer = () => {
  return (
    <footer>
      <p>© 2026 My Restaurant</p>
      <div 
        className="footer-image" 
        style={{ backgroundImage: `url(${footer})` }}
      ></div>
    </footer>
  );
};

export default Footer;



