import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const LoginCard = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };
  

  return (
    <div className="card">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn primary">
          Login
        </button>
      </form>

      <button
  className="btn secondary"
  onClick={() => navigate("/signup")}
>
  Sign Up
</button>
      <button className="btn link"
      onClick={() => navigate("/forgot-password")}>Forgot Password?</button>
    </div>
  );
};

export default LoginCard;