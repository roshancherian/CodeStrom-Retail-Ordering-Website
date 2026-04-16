import { useState } from "react";
import { signup } from "../services/authService";
import { useNavigate } from "react-router-dom";

function SignupCard() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await signup(user);
      alert("Signup successful");
      navigate("/login");
    } catch {
      alert("Signup failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Signup</h2>

        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) =>
            setUser({ ...user, name: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) =>
            setUser({ ...user, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) =>
            setUser({ ...user, password: e.target.value })
          }
        />

        <button onClick={handleSignup}>
          Signup
        </button>

        <p className="link" onClick={() => navigate("/login")}>
          Already have an account? Login
        </p>
      </div>
    </div>
  );
}

export default SignupCard;