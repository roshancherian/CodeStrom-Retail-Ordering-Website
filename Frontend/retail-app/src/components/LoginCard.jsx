import { useState } from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";

function LoginCard() {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await login(data);
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
    } catch {
      alert("Invalid login");
    }
  };

  return (
    <div className="card">
      <h2>Login</h2>

      <input placeholder="Email"
        onChange={(e) => setData({ ...data, email: e.target.value })} />

      <input type="password" placeholder="Password"
        onChange={(e) => setData({ ...data, password: e.target.value })} />

      <button onClick={handleLogin}>Login</button>

      <p onClick={() => navigate("/signup")}>Create Account</p>
      <p onClick={() => navigate("/forgot")}>Forgot Password?</p>
    </div>
  );
}

export default LoginCard;