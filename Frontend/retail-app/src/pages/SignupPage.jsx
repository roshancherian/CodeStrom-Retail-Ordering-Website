import { useState } from "react";
import SignupCard from "../components/SignupCard";
import { registerUser } from "../services/authService";

const SignupPage = () => {
  const [message, setMessage] = useState("");

  const handleSignup = async (data) => {
    try {
      const res = await registerUser(data);
      setMessage(res.message); // ✅ success
    } catch (err) {
      setMessage(err); // ❌ error
    }
  };

  return (
    <div className="page">
      <div>
        <SignupCard onSignup={handleSignup} />
        {message && <p style={{ textAlign: "center" }}>{message}</p>}
      </div>
    </div>
  );
};

export default SignupPage;