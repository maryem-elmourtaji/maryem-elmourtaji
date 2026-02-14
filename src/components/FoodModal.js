/*const FoodModal = ({ food, onClose, onAdd }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <img src={food.image} alt={food.name} />
        <h3>{food.name}</h3>
        <p>{food.price} DH</p>

        <button onClick={() => onAdd(food)}>Add to cart</button>
        <button className="close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default FoodModal;


export const FoodModal = ({ food, onClose, onAdd }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <img src={food.image} alt={food.name} />
        <h3>{food.name}</h3>
        <p>{food.price} DH</p>

        <button onClick={() => onAdd(food)}>Add to cart</button>
        <button className="close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

*/

const FoodModal = ({ food, onClose, onAdd }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <img src={food.image} alt={food.name} />
        <h3>{food.name}</h3>
        <p>{food.price} DH</p>

        <button onClick={() => onAdd(food)}>Add to cart</button>
        <button className="close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default FoodModal; // 🔥 مهم جدا
