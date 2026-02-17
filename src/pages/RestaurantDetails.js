







/*


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

import { useParams } from "react-router-dom";
import Menu from "../components/Menu";
import restaurants from "../data";

const RestaurantDetails = () => {
  const { id } = useParams();
  const restaurant = restaurants.find(r => r.id === parseInt(id));

  if (!restaurant) return <p>Restaurant non trouvé.</p>;

  const handleSelect = (menuItem) => alert(`Vous avez sélectionné: ${menuItem.name}`);

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <p>{restaurant.city}</p>

      <Menu menu={restaurant.menu} onSelect={handleSelect} />
    </div>
  );
};

export default RestaurantDetails;

*/

import { useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "../components/Menu";
import Cart from "../components/Cart"; // Cart فيه اختيار الأطباق + الدفع + الحجز

const RestaurantDetails = ({ restaurants, user }) => {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === parseInt(id));

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  if (!restaurant) return <p>Restaurant not found</p>;

  // كيضيف طبق للقائمة
  const handleSelect = (item) => {
    setCart([...cart, item]);
    setShowCart(true); // كيحل الـ Cart Modal مباشرة
  };

  // كيحيد طبق من القائمة
  const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="restaurant-details">
      <h2>{restaurant.name}</h2>
      <p>{restaurant.city}</p>
      <img
        src={`/images/${restaurant.image}`}
        alt={restaurant.name}
        style={{ width: "300px", borderRadius: "10px" }}
      />

      {/* Menu ديال المطعم */}
      <Menu menu={restaurant.menu} onSelect={handleSelect} />

     

      {/* Cart Modal */}
      {showCart && (
        <div className="cart-modal">
          <div className="cart-content">
            <button className="close-btn" onClick={() => setShowCart(false)}>
              ✖
            </button>
            <Cart
              cart={cart}
              onRemove={handleRemove}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantDetails;
