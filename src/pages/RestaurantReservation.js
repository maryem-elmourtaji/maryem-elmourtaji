import { useState } from "react";

const RestaurantReservation = ({ restaurant }) => {
  const [selectedDish, setSelectedDish] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedTable, setSelectedTable] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState({ name: "", email: "" });

  const handleDishClick = (dish) => {
    setSelectedDish(dish);
    setShowModal(true);
  };

  const handleCancel = () => {
    setSelectedDish(null);
    setSelectedTable(null);
    setPaymentInfo({ name: "", email: "" });
    setShowModal(false);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    alert(`Payment done for ${selectedDish.name} at table ${selectedTable}`);
    handleCancel();
  };

  return (
    <div>
      <h2>{restaurant.name}</h2>

      <div className="menu-grid">
        {restaurant.menu.map((dish) => (
          <div
            key={dish.id}
            className="menu-card"
            onClick={() => handleDishClick(dish)}
          >
            <img src={`/images/${dish.image}`} alt={dish.name} />
            <h4>{dish.name}</h4>
            <p>{dish.price} DH</p>
          </div>
        ))}
      </div>

      {showModal && selectedDish && (
        <div className="modal">
          <div className="modal-content">
            <h3>Selected Dish</h3>
            <p>{selectedDish.name}</p>
            <p>{selectedDish.price} DH</p>
            <button onClick={handleCancel}>Annuler</button>

            <h4>Choose a Table</h4>
            <select
              value={selectedTable || ""}
              onChange={(e) => setSelectedTable(e.target.value)}
            >
              <option value="">--Select Table--</option>
              {restaurant.tables.map((table) => (
                <option
                  key={table.id}
                  value={table.id}
                  disabled={!table.available}
                >
                  Seats: {table.seats} {table.available ? "(Available)" : "(Booked)"}
                </option>
              ))}
            </select>

            {selectedTable && (
              <form onSubmit={handlePaymentSubmit}>
                <h4>Payment Info</h4>
                <input
                  type="text"
                  placeholder="Name"
                  value={paymentInfo.name}
                  onChange={(e) =>
                    setPaymentInfo({ ...paymentInfo, name: e.target.value })
                  }
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={paymentInfo.email}
                  onChange={(e) =>
                    setPaymentInfo({ ...paymentInfo, email: e.target.value })
                  }
                  required
                />
                <button type="submit">Pay & Book</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantReservation;
