
const ReservationForm = ({ onClose, onConfirm = () => {} }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm();
  };

  return (
    <div className="reservation-form">
      <h3>Réserver une table</h3>
      <form onSubmit={handleSubmit}>
        <input type="date" required />
        <input type="time" required />
        <input type="number" placeholder="Numéro de table" required />
        <input type="number" placeholder="Nombre de personnes" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Téléphone" required />

        <button type="submit" className="confirm-btn">
          Confirmer la réservation
        </button>
      </form>
      <button className="close-btn" onClick={onClose}>
        Fermer
      </button>
    </div>
  );
};

export default ReservationForm;
