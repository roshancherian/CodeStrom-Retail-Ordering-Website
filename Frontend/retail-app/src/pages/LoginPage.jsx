import { useState } from "react";
import LoginCard from "../components/LoginCard";
import { loginUser } from "../services/authService";

const LoginPage = () => {
  const [message, setMessage] = useState("");

  const handleLogin = async (data) => {
  try {
    await loginUser(data);
    navigate("/home"); // ✅ MUST be this
  } catch (err) {
    setMessage(err);
  }
};

  return (
    <div className="page">
      <div>
        <LoginCard onLogin={handleLogin} />
        {message && <p style={{ textAlign: "center" }}>{message}</p>}
      </div>
    </div>
  );
};

export default LoginPage;