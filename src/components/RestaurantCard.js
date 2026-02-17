




/*

import { useNavigate } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {

  const navigate = useNavigate();

  return (
    <div className="restaurant-card">

      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="restaurant-image"
      />

      <div className="restaurant-info">
        <h3>{restaurant.name}</h3>
        <p>{restaurant.city}</p>
      </div>

      <div className="card-actions">

        <button
          className="reserve-btn"
          onClick={() => navigate(`/restaurant/${restaurant.id}`)}
        >
          Réserver
        </button>

      </div>

    </div>
  );
};

export default RestaurantCard;*/

import { useNavigate } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  const navigate = useNavigate();

  return (
    <div className="restaurant-card">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="restaurant-image"
      />

      <div className="restaurant-info">
        <h3>{restaurant.name}</h3>
        <p>{restaurant.city}</p>
      </div>

      <div className="card-actions">
        <button
          className="reserve-btn"
          onClick={() =>
            navigate(`/restaurant/${restaurant.id}`, { state: { restaurant } })
          }
        >
          Réserver
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;
