
/*
import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import PageContent from './component/PageContent';
import Footer from './component/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PageContent />
      <Footer />
    </div>
  );
}

export default App;



import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import Reservations from "./pages/Reservations";
import Login from "./pages/Login";
import Register from "./pages/Registrer";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";
import ReservationForm from "./components/ReservationForm";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/reservations" element={<ReservationForm/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;





import { useState } from 'react';
import restaurantsData from './data/restaurants';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RestaurantDetails from './pages/RestaurantDetails';
import Footer from './components/Footer';
import './styles/style.css';

function App() {
  const [restaurants, setRestaurants] = useState(restaurantsData);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  return (
    <>
      <Navbar />

      {!selectedRestaurant ? (
        <Home 
          restaurants={restaurants}
          onSelect={setSelectedRestaurant}
        />
      ) : (
        <RestaurantDetails
          restaurant={selectedRestaurant}
          setRestaurant={setSelectedRestaurant}
        />
      )}

      <Footer />
    </>
  );
}

export default App;


import { useState } from "react";
import restaurants from "./data/restaurants";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RestaurantDetails from "./pages/RestaurantDetails";

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  return (
    <>
      <Navbar />

      {!selectedRestaurant ? (
        <Home
          restaurants={restaurants}
          onSelect={setSelectedRestaurant}
        />
      ) : (
        <RestaurantDetails
          restaurant={selectedRestaurant}
        />
      )}
    </>
  );
}

export default App;





import restaurantsData from './data/restaurants';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RestaurantDetails from './pages/RestaurantDetails';
import Footer from './components/Footer';
import './styles/style.css';

function App() {
  const [restaurants, setRestaurants] = useState(restaurantsData);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  return (
    <>
      <Navbar />

      {!selectedRestaurant ? (
        <Home 
          restaurants={restaurants}
          onSelect={setSelectedRestaurant}
        />
      ) : (
        <RestaurantDetails
          restaurant={selectedRestaurant}
          setRestaurant={setSelectedRestaurant}
        />
      )}

      <Footer />
    </>
  );
}

export default App;







import { useState } from "react";
import restaurants from "./data/restaurants";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RestaurantDetails from "./pages/RestaurantDetails";
import Footer from "./components/Footer";
import "./styles/style.css";
function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  return (
    <>
      <Navbar />

      {!selectedRestaurant ? (
        <Home
          restaurants={restaurants}
          onSelect={setSelectedRestaurant}
        />
      ) : (
        <RestaurantDetails
          restaurant={selectedRestaurant}
        />
      )}
    </>
  );
}

export default App;

import { useState } from "react";
import restaurants from "./data/restaurants";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RestaurantDetails from "./pages/RestaurantDetails";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import "./styles/style.css";

function App() {
  const [showHome, setShowHome] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  return (
    <>
      <Navbar />

      {!showHome ? (
        <Landing onEnter={() => setShowHome(true)} />
      ) : !selectedRestaurant ? (
        <Home
          restaurants={restaurants}
          onSelect={setSelectedRestaurant}
        />
      ) : (
        <RestaurantDetails restaurant={selectedRestaurant} />
      )}

      <Footer />
    </>
  );
}

export default App;


import { useState } from "react";
import restaurants from "./data/restaurants";
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
  const [user, setUser] = useState(null); // 👈 AUTH

  return (
    <>
      <Navbar user={user} setUser={setUser} />

      {!showHome ? (
        <Landing onEnter={() => setShowHome(true)} />
      ) : !user ? (
        <Auth onLogin={setUser} />
      ) : !selectedRestaurant ? (
        <Home
          restaurants={restaurants}
          onSelect={setSelectedRestaurant}
        />
      ) : (
        <RestaurantDetails restaurant={selectedRestaurant} user={user} />
      )}

      <Footer />
    </>
  );
}

export default App;*/


import { useState } from "react";
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






