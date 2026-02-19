export const tables = [
  { id: 1, numero: 1, capacite: 4, disponible: true },
  { id: 2, numero: 2, capacite: 2, disponible: false },
];
const Menu = ({ menu = [], onSelect }) => {
  return (
    <div className="menu">
      <h3>Menu</h3>

      <div className="menu-grid">
        {menu.map((item) => (
          <div
            key={item.id}
            className="menu-card"
            onClick={() => onSelect(item)}
          >
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.price} DH</p>
          </div>
        ))}
      </div>
    </div>
  );
};

import { useState } from "react";

const PaymentForm = ({ total, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCVC] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `✅ Paiement effectué avec succès !\nMontant: ${total} DH\nMerci ${name}`,
    );
    setName("");
    setEmail("");
    setCardNumber("");
    setExpiry("");
    setCVC("");
    if (onClose) onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        animation: "fadeIn 0.3s",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "15px",
          width: "350px",
          maxWidth: "90%",
          boxShadow: "0 10px 25px black",
          transform: "scale(0.8)",
          animation: "popIn 0.3s forwards",
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "15px" }}>Paiement</h3>
        <p style={{ textAlign: "center", fontWeight: "bold" }}>
          Total: {total} DH
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Nom complet"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Numéro de carte"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Date d'expiration"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="CVC"
            value={cvc}
            onChange={(e) => setCVC(e.target.value)}
            required
            style={inputStyle}
          />
          <button type="submit" style={confirmBtnStyle}>
            Confirmer le paiement
          </button>
        </form>

        <button onClick={onClose} style={closeBtnStyle}>
          Fermer
        </button>
      </div>

      {/* Animations CSS */}
      <style>
        {`
          @keyframes popIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

// Inline Styles
const inputStyle = {
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid black",
  fontSize: "14px",
  outline: "none",
  transition: "0.3s",
};

const confirmBtnStyle = {
  padding: "10px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#007bff",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "0.3s",
};

const closeBtnStyle = {
  marginTop: "10px",
  padding: "8px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "red",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
  width: "100%",
  transition: "0.3s",
};

export default PaymentForm;
