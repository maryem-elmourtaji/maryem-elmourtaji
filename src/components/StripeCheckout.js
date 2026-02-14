import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("VOTRE_PUBLIC_KEY_STRIPE"); // عوضها بالمفتاح ديالك

const PaymentForm = ({ total }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const card = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (!error) {
      alert(`Paiement effectué! Total: ${total} DH`);
      console.log(paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <CardElement />
      <button type="submit" style={{ padding: "10px", backgroundColor: "#16a34a", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}>
        Payer
      </button>
    </form>
  );
};

const StripeCheckout = ({ total }) => (
  <Elements stripe={stripePromise}>
    <PaymentForm total={total} />
  </Elements>
);

export default StripeCheckout;
