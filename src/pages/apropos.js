import AproposImage from "../assets/Apropos.jpeg";

const Apropos = () => {
  return (
    <div className="apropos-container">
      <h1 className="apropos-title">À propos de TableBook</h1>

      <img
        src={AproposImage}
        alt="TableBook"
        className="apropos-image"
      />

      <p className="apropos-text">
        TableBook est une plateforme moderne pour réserver votre table
        dans les meilleurs restaurants facilement et rapidement.
        Notre objectif est de simplifier la réservation en ligne.
      </p>

      {/* Informations */}
      <div className="apropos-info">

        <h3>📍 Informations</h3>

        <p>📞 Téléphone: +212 6 12 34 56 78</p>
        <p>📧 Email: contact@tablebook.com</p>
        <p>📍 Adresse: Rabat, Maroc</p>
      </div>
      {/* Social media */}
      <div className="apropos-social">
        <h3>🌐 Suivez-nous</h3>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="social-link instagram">
          Instagram
        </a>
        
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="social-link facebook">
          Facebook
        </a>
      </div>
    </div>
  );
};

// This file is intentionally left blank. The content has been moved to Apropos.js (with uppercase 'A') to resolve casing issues on case-insensitive filesystems.


export default Apropos;
