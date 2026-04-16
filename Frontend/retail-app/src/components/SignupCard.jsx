import { useState } from "react";
import { signup } from "../services/authService";
import { useNavigate } from "react-router-dom";

function SignupCard() {
  const [user, setUser] = useState({
    name: "", email: "", password: ""
  });

  const navigate = useNavigate();

  const handleSignup = async () => {
    await signup(user);
    alert("Account Created");
    navigate("/login");
  };

  return (
    <div className="card">
      <h2>Signup</h2>

      <input placeholder="Name"
        onChange={(e) => setUser({ ...user, name: e.target.value })} />

      <input placeholder="Email"
        onChange={(e) => setUser({ ...user, email: e.target.value })} />

      <input type="password" placeholder="Password"
        onChange={(e) => setUser({ ...user, password: e.target.value })} />

      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default SignupCard;