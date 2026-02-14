

const Landing = ({ onEnter }) => {
  return (
    <div className="landing">
      <div className="overlay">
        <h1 className="fade-down">TableBook</h1>
        <p className="fade-up">
          Réservez votre table بسهولة و بسرعة
        </p>

        <button className="enter-btn bounce" onClick={onEnter}>
          Voir les restaurants
        </button>
      </div>
    </div>
  );
};

export default Landing;
