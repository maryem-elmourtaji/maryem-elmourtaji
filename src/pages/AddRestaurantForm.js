
import { useState, useEffect } from "react";

const AddRestaurantForm = ({ restaurant, onAdd, onUpdate, onClose }) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (restaurant) {
      setName(restaurant.name);
      setCity(restaurant.city);
      setImage(restaurant.image);
    }
  }, [restaurant]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: restaurant ? restaurant.id : Date.now(),
      name,
      city,
      image,
    };

    restaurant ? onUpdate(data) : onAdd(data);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h3>{restaurant ? "Modifier Restaurant" : "Ajouter Restaurant"}</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom du restaurant"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Ville"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />

          <div className="form-actions">
            <button type="submit" className="btn-primary">
              {restaurant ? "Modifier" : "Ajouter"}
            </button>

            <button
              type="button"
              className="btn-cancel"
              onClick={onClose}
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRestaurantForm;





