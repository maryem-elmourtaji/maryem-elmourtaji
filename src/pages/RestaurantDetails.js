











// RestaurantDetails.js
import { useState } from "react";
import Menu from "../components/Menu";
import Cart from "../components/Cart";

const RestaurantDetails = ({ restaurant, user }) => {
  const [cart, setCart] = useState([]);

  // function باش تحيد item من cart
  const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleSelect = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="restaurant-details">
      <h2>{restaurant.name}</h2>
      <p>{restaurant.city}</p>

      <Menu menu={restaurant.menu} onSelect={handleSelect} />

      <Cart cart={cart} onRemove={handleRemove} />
    </div>
  );
};

export default RestaurantDetails;
