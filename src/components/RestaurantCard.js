






const RestaurantCard = ({ restaurant, onSelect }) => {
  return (
    <div className="restaurant-card">
      <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />

      <div className="restaurant-info">
        <h3>{restaurant.name}</h3>
        <p>{restaurant.city}</p>
      </div>

      <div className="card-actions">
        {/* الزر مرتبط بالـ prop onSelect */}
        <button className="reserve-btn" onClick={onSelect}>
          Réserver
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;

