/*

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
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/restaurants");
  };

  return (
    <div className="landing">
      <div className="overlay">
        <h1 className="fade-down">TableBook</h1>

        <p className="fade-up">
          Réservez votre table بسهولة و بسرعة
        </p>

        <button className="enter-btn bounce" onClick={handleEnter}>
          Voir les restaurants
        </button>
      </div>
    </div>
  );
};

export default Landing;
*/
import { useNavigate } from "react-router-dom";

const Landing = () => {

  const navigate = useNavigate();

  return (
    <div className="landing">
      <div className="overlay">

        <h1>TableBook</h1>

        <button
          className="enter-btn"
          onClick={() => navigate("/home")}
        >
          Voir les restaurants
        </button>

      </div>
    </div>
  );
};

export default Landing;

