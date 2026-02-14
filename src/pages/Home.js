/*import RestaurantCard from "../components/RestaurantCard";

const Home = ({ restaurants, onSelect }) => {
  return (
    <div className="page">
      <h2>Restaurants</h2>
      <button className="reserve-btn">Ajouter un restaurant</button>

      <div className="restaurants-grid">
        {restaurants.map((rest) => (
          <RestaurantCard
            key={rest.id}
            restaurant={rest}
            onSelect={() => onSelect(rest)} // هنا الربط الصحيح
          />
        ))}
      </div>
    </div>
  );
};

export default Home;*/
import { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import AddRestaurantForm from "../pages/AddRestaurantForm"; // الفورم

const Home = ({ restaurants, onSelect }) => {
  const [showForm, setShowForm] = useState(false); // هذا باش نتحكمو فظهور الفورم

  return (
    <div className="page">
      <h2>Restaurants</h2>

      {/* زر Ajouter */}
      <button
        className="reserve-btn"
        onClick={() => setShowForm(true)} // ملي تضغطي، الفورم يظهر
      >
        Ajouter un restaurant
      </button>

      {/* قائمة Restaurants */}
      <div className="restaurants-grid">
        {restaurants.map((rest) => (
          <RestaurantCard
            key={rest.id}
            restaurant={rest}
            onSelect={() => onSelect(rest)}
          />
        ))}
      </div>

      {/* الفورم يظهر إلا showForm = true */}
      {showForm && (
        <AddRestaurantForm
          onAdd={(newRes) => {
            restaurants.push(newRes); // أو استعملي setRestaurants فـ parent
            setShowForm(false); // من بعد ما نضيفو، الفورم يختفي
          }}
          onClose={() => setShowForm(false)} // زر الإغلاق
        />
      )}
    </div>
  );
};

export default Home;










































