import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPasswordCard = ({ onReset }) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onReset(email);
  };

  return (
    <div className="card">
      <h2>Forgot Password</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit" className="btn primary">
          Reset Password
        </button>
      </form>

      <button
        className="btn secondary"
        onClick={() => navigate("/")}
      >
        Back to Login
      </button>
    </div>
  );
};

export default ForgotPasswordCard;