import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginCard from "../components/LoginCard";
import { loginUser } from "../services/authService";

const LoginPage = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const res = await loginUser(data);
      setMessage(res.message);

      // ✅ redirect to home after login
      navigate("/home");
    } catch (err) {
      setMessage(err);
    }
  };

  return (
    <div className="page">
      <div>
        <LoginCard onLogin={handleLogin} />
        {message && (
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;