/*import { useState } from "react";
import initialRestaurants from "./data/restaurants"; // 1. بدّل السمية هنا باش ما تتلفش
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RestaurantDetails from "./pages/RestaurantDetails";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import "./styles/style.css";

function App() {
  const [showHome, setShowHome] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [user, setUser] = useState(null);

  // 2. رد الداتا عبارة عن State باش تقدر تبدلها
  const [allRestaurants, setAllRestaurants] = useState(initialRestaurants);

  return (
    <>
      <Navbar user={user} setUser={setUser} />

      {!showHome ? (
        <Landing onEnter={() => setShowHome(true)} />
      ) : !user ? (
        <Auth onLogin={setUser} />
      ) : !selectedRestaurant ? (
        <Home
          // 3. صيفط الـ State والـ Function اللي كتعادلها
          restaurants={allRestaurants}
          setRestaurants={setAllRestaurants} 
          onSelect={setSelectedRestaurant}
        />
      ) : (
        <RestaurantDetails restaurant={selectedRestaurant} user={user} />
      )}

      <Footer />

      
    </>
  );
}

export default App;





*/
// src/App.js
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Data
import restaurants from "./data";
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import RestaurantDetails from "./pages/RestaurantDetails";
import Auth from "./pages/Auth";
import Apropos from "./pages/apropos";

// Styles
import "./styles/style.css";

function App() {
  const [user, setUser] = useState(null);
  const [allRestaurants, setAllRestaurants] = useState(restaurants);

  return (
    <BrowserRouter>
      {/* Navbar */}
      <Navbar user={user} setUser={setUser} />

      {/* Routes */}
      <Routes>
        {/* Landing */}
        <Route path="/" element={<Landing />} />

        {/* Home */}
        <Route
          path="/home"
          element={
            <Home
              restaurants={allRestaurants}
              setRestaurants={setAllRestaurants}
            />
          }
        />

        {/* Login */}
        <Route path="/login" element={<Auth onLogin={setUser} />} />

        {/* Restaurant Details */}
        <Route
          path="/restaurant/:id"
          element={<RestaurantDetails restaurants={allRestaurants} user={user} />}
        />

        {/* Apropos */}
        <Route path="/apropos" element={<Apropos />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
