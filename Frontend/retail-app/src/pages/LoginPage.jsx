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
    console.log("SUCCESS"); // 👈 add this
    navigate("/home");
  } catch (err) {
    console.log("ERROR:", err); // 👈 add this
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