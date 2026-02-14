import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const { login } = useContext(AuthContext);

  return (
    <div>
      <h2>Login</h2>
      <input onChange={(e) => setEmail(e.target.value)} placeholder="email" />
      <button onClick={() => login(email)}>Login</button>
    </div>
  );
}

