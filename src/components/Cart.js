/*const Cart = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h3>Cart</h3>
      {cart.length === 0 && <p>No items</p>}
      {cart.map((item, index) => (
        <p key={index}>{item.name} - {item.price} DH</p>
      ))}
      <hr />
      <strong>Total: {total} DH</strong>
    </div>
  );
};




const Cart = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h3>Cart</h3>
      {cart.length === 0 && <p>No items</p>}
      {cart.map((item, index) => (
        <p key={index}>{item.name} - {item.price} DH</p>
      ))}
      <hr />
      <strong>Total: {total} DH</strong>
    </div>
  );
};
export default Cart;



const Cart = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePay = () => {
    if (cart.length === 0) {
      alert("Votre panier est vide !");
    } else {
      alert(`Paiement effectué avec succès ! Total: ${total} DH`);
      console.log("Items payés :", cart);
      // هنا ممكن تزيد logic باش تمسح cart أو ترسلها للسيرفر
    }
  };

  return (
    <div className="cart">
      <h3>Cart</h3>
      {cart.length === 0 && <p>No items</p>}
      {cart.map((item, index) => (
        <p key={index}>{item.name} - {item.price} DH</p>
      ))}
      <hr />
      <strong>Total: {total} DH</strong>

      {/* ===== Button Payer ===== */
      //<button onClick={handlePay} className="pay-button">Payer</button>
   // </div>
 // );
//};
/*
const handlePay = () => {
  if (cart.length === 0) {
    alert("Votre panier est vide !");
    return;
  }

  // Redirect لصفحة الدفع الخارجي
  const paymentUrl = `https://www.examplepayment.com/pay?amount=${total}`;
  window.location.href = paymentUrl;
};

export default Cart;


import { useState } from "react";
import StripeCheckout from "./StripeCheckout";

const Cart = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const [paying, setPaying] = useState(false);

  return (
    <div className="cart">
      <h3>Cart</h3>
      {cart.length === 0 && <p>No items</p>}
      {cart.map((item, index) => (
        <p key={index}>{item.name} - {item.price} DH</p>
      ))}
      <hr />
      <strong>Total: {total} DH</strong>

      {!paying && (
        <button onClick={() => setPaying(true)} className="pay-button">
          Payer
        </button>
      )}

      {paying && <StripeCheckout total={total} />}
    </div>
  );
};

export default Cart;



import { useState } from "react";
import PaymentForm from "./PaymentForm"; // هاد الفورم اللي غادي نعملوه

const Cart = ({ cart, onRemove }) => {
  const [paying, setPaying] = useState(false);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h3>Mon Panier 🛒</h3>

      {cart.length === 0 && <p>Pas de plats ajoutés</p>}

      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <span>{item.name}</span>
          <span>{item.price} DH</span>
          <button className="remove-btn" onClick={() => onRemove(item.id)}>
            ✖
          </button>
        </div>
      ))}

      <hr />
      <strong>Total: {total} DH</strong>

      {!paying && cart.length > 0 && (
        <button className="pay-button" onClick={() => setPaying(true)}>
          Payer
        </button>
      )}

      {paying && <PaymentForm total={total} onClose={() => setPaying(false)} />}
    </div>
  );
};

export default Cart;













import { useState } from "react";
import PaiementForm from "./PaymentForm";

const Cart = ({ cart, onRemove }) => {
  const [paying, setPaying] = useState(false);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h3>Cart</h3>
      {cart.length === 0 && <p>No items</p>}
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          {item.name} - {item.price} DH
          <button onClick={() => onRemove(item.id)}>✖</button>
        </div>
      ))}
      <hr />
      <strong>Total: {total} DH</strong>

      {!paying && cart.length > 0 && (
        <button onClick={() => setPaying(true)} className="pay-button">
          Payer
        </button>
      )}

      {paying && (
        <PaiementForm
          total={total}
          onClose={() => setPaying(false)}
        />
      )}
    </div>
  );
};

export default Cart;



import { useState } from "react";
import PaymentForm from "./PaymentForm";

const Cart = ({ cart, onRemove }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const [showPayment, setShowPayment] = useState(false);

  return (
    <div className="cart">
      <h3>Cart</h3>

      {cart.length === 0 && <p>No items</p>}

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          {item.name} - {item.price} DH
          <button 
            className="remove-btn" 
            onClick={() => onRemove(item.id)}
          >
            ✖
          </button>
        </div>
      ))}

      <hr />
      <strong>Total: {total} DH</strong>

      {!showPayment && cart.length > 0 && (
        <button 
          className="pay-button" 
          onClick={() => setShowPayment(true)}
        >
          Payer
        </button>
      )}

      {showPayment && (
        <PaymentForm 
          total={total} 
          onClose={() => setShowPayment(false)} 
        />
      )}
    </div>
  );
};

export default Cart;
*/



import { useState } from "react";
import PaymentForm from "./PaymentForm";
import ReservationForm from "./ReservationForm"; // 1. جيب الفورم ديال الحجز

const Cart = ({ cart, onRemove }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  
  // States باش نتحكمو في ظهور الـ Forms
  const [showPayment, setShowPayment] = useState(false);
  const [showReservation, setShowReservation] = useState(false); // 2. State جديدة للحجز

  return (
    <div className="cart">
      <h3>Cart</h3>

      {cart.length === 0 && <p>No items</p>}

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          {item.name} - {item.price} DH
          <button 
            className="remove-btn" 
            onClick={() => onRemove(item.id)}
          >
            ✖
          </button>
        </div>
      ))}

      <hr />
      <strong>Total: {total} DH</strong>

      <div className="cart-buttons" style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
        {/* زر الأداء */}
        {!showPayment && cart.length > 0 && (
          <button 
            className="pay-button" 
            onClick={() => {
                setShowPayment(true);
                setShowReservation(false); // نسدو ديال الحجز إلا كحلنا هادي
            }}
          >
            Payer
          </button>
        )}

        {/* 3. زر الحجز الجديد */}
        {!showReservation && (
          <button 
            className="reserve-button" 
            onClick={() => {
                setShowReservation(true);
                setShowPayment(false); // نسدو ديال الأداء إلا كحلنا هادي
            }}
            style={{ backgroundColor: '#223f62', color: 'white' }}
          >
            Réserver une Table
          </button>
        )}
      </div>

      {/* 4. عرض فورم الأداء */}
      {showPayment && (
        <PaymentForm 
          total={total} 
          onClose={() => setShowPayment(false)} 
        />
      )}

      {/* 5. عرض فورم الحجز */}
      {showReservation && (
        <ReservationForm 
          onClose={() => setShowReservation(false)} 
          onConfirm={() => {
            alert("تم تأكيد الحجز بنجاح!");
            setShowReservation(false);
          }} 
        />
      )}
    </div>
  );
};

export default Cart;













