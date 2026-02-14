import { useState } from "react";

const Auth = ({ onLogin }) => {
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // fake login
    onLogin({
      name: "User Test",
      email: "test@email.com",
    });
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>{isRegister ? "Inscription" : "Connexion"}</h2>

        {isRegister && (
          <input type="text" placeholder="Nom complet" required />
        )}

        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Mot de passe" required />

        <button type="submit">
          {isRegister ? "S'inscrire" : "Se connecter"}
        </button>

        <p onClick={() => setIsRegister(!isRegister)} className="auth-switch">
          {isRegister
            ? "Déjà un compte ? Se connecter"
            : "Pas de compte ? S'inscrire"}
        </p>
      </form>
    </div>
  );
};

export default Auth;
