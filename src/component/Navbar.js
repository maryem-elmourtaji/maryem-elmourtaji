import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo / Image */}
      <div className="logo">
        <img src="/mery.jpg" alt="Logo" />
      </div>
   
      <a href="#">Home</a>
      <a href="#">Menu</a>
      <a href="./ReservationForm">Reservations</a>
      <a href="#">Contact</a>
      <button>Login</button>
    </nav>
  );
};

export default Navbar;
