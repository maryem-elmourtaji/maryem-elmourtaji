import { useState } from "react";

const PaymentForm = ({ total, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCVC] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Paiement effectué avec succès !\nMontant: ${total} DH\nMerci ${name}`);
    setName(""); setEmail(""); setCardNumber(""); setExpiry(""); setCVC("");
    if (onClose) onClose();
  };

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
      animation: "fadeIn 0.3s"
    }}>
      <div style={{
        backgroundColor: "#ffffff",
        padding: "30px",
        borderRadius: "20px",
        width: "360px",
        maxWidth: "90%",
        boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
        transform: "scale(0.8)",
        animation: "popIn 0.4s forwards"
      }}>
        <h3 style={{ textAlign: "center", marginBottom: "15px", color: "#007bff" }}>Paiement</h3>
        <p style={{ textAlign: "center", fontWeight: "bold", color: "#007bff" }}>Total: {total} DH</p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "15px" }}>
          <input type="text" placeholder="Nom complet" value={name} onChange={e => setName(e.target.value)} required style={inputStyle}/>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required style={inputStyle}/>
          <input type="text" placeholder="Numéro de carte" value={cardNumber} onChange={e => setCardNumber(e.target.value)} required style={inputStyle}/>
          <input type="text" placeholder="Date d'expiration" value={expiry} onChange={e => setExpiry(e.target.value)} required style={inputStyle}/>
          <input type="text" placeholder="CVC" value={cvc} onChange={e => setCVC(e.target.value)} required style={inputStyle}/>
          <button type="submit" style={confirmBtnStyle}>Confirmer le paiement</button>
        </form>

        <button onClick={onClose} style={closeBtnStyle}>Fermer</button>
      </div>

      {/* Animations CSS */}
      <style>
        {`
          @keyframes popIn {
            from { transform: scale(0.7); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          input:focus {
            border-color: #007bff;
            box-shadow: 0 0 8px rgba(0,123,255,0.5);
          }
          button:hover {
            opacity: 0.9;
          }
        `}
      </style>
    </div>
  );
};

// Inline Styles
const inputStyle = {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #007bff",
  fontSize: "14px",
  outline: "none",
  transition: "0.3s",
};

const confirmBtnStyle = {
  padding: "12px",
  borderRadius: "10px",
  border: "none",
  backgroundColor: "#007bff",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "0.3s",
};

const closeBtnStyle = {
  marginTop: "12px",
  padding: "10px",
  borderRadius: "10px",
  border: "none",
  backgroundColor: "#dc3545", // rouge clair
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
  width: "100%",
  transition: "0.3s",
};

export default PaymentForm;


