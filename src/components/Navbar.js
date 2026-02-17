/*import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">

      <h3 className="logo">Reservation des restaurants</h3>

      <div className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/login">Login</Link>
       <Link to="/apropos">A propos</Link>
      </div>

    </nav>
  );
};

export default Navbar;
*/


import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // path khass ykoun sahih

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <h3 className="logo">bienvenue sur notre plateforme</h3>

      <div className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/apropos">A propos</Link>

        {user ? (
          <>
            <span style={{ marginLeft: "15px" }}>Bienvenue {user.name}</span>
            <button
              onClick={logout}
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
