import React from 'react';
import hero from '../assets/mery.jpg';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${hero})` }}>
      <div className="hero-content">
        <h1>Welcome to Our Restaurant</h1>
        <p>Book your table online and enjoy a delicious meal!</p>
        <button>Reserve Now</button>
      </div>
    </section>
  );
};

export default Hero;
