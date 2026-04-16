import { useState } from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";

function LoginCard() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await login(data);

      localStorage.setItem("user", JSON.stringify(res.data));

      alert("Login successful");
      navigate("/");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) =>
            setData({ ...data, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) =>
            setData({ ...data, password: e.target.value })
          }
        />

        <button onClick={handleLogin}>
          Login
        </button>

        <p className="link" onClick={() => navigate("/signup")}>
          Create Account
        </p>

        <p className="link" onClick={() => navigate("/forgot")}>
          Forgot Password?
        </p>
      </div>
    </div>
  );
}

export default LoginCard;