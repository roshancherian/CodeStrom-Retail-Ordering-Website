import { useState } from "react";
import ForgotPasswordCard from "../components/ForgotPasswordCard";
import { forgotPassword } from "../services/authService";

const ForgotPasswordPage = () => {
  const [message, setMessage] = useState("");

  const handleReset = async (email) => {
    try {
      const res = await forgotPassword(email);
      setMessage(res.message);
    } catch (err) {
      setMessage(err);
    }
  };

  return (
    <div className="page">
      <div>
        <ForgotPasswordCard onReset={handleReset} />
        {message && <p style={{ textAlign: "center" }}>{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;